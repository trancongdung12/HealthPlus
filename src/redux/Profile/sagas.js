import {put, call, takeLatest} from 'redux-saga/effects';
import {ProfileTypes}  from './actions';
import NavigationUtils from '../../navigation/Utils';
import AsyncStorage from '@react-native-community/async-storage';

export function* SetUpProfileSagas(){
      try {
      } catch (error) {
          
      }
}

export function* SetUpProfileSuccessSagas(data){
    try {
      yield AsyncStorage.setItem("User_profile",JSON.stringify(data.res))
      yield NavigationUtils.startRoot()
    } catch (error) {
        
    }
}

export function* UpdateProfileSuccessSage(data){
  try{
    yield AsyncStorage.removeItem('User_profile');
    yield AsyncStorage.setItem("User_profile",JSON.stringify(data.data));
    yield NavigationUtils.startRoot();
    
  }catch(error){
    console.log(error);
  }
}

const googleFitSaga = () =>[
    takeLatest(ProfileTypes.SETUP_PROFILE, SetUpProfileSagas),
    takeLatest(ProfileTypes.SETUP_PROFILE_SUCCESS, SetUpProfileSuccessSagas),
    takeLatest(ProfileTypes.UPDATE_PROFILE_SUCCESS, UpdateProfileSuccessSage),

];
export default googleFitSaga()
