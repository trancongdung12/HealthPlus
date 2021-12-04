/* eslint-disable prettier/prettier */
import {Navigation} from 'react-native-navigation';
import { registerScreens,NavigationUtils } from './navigation';
import AsyncStorage from '@react-native-community/async-storage';
import loginType from './redux/LoginRedux/Actions';
import store from './redux/Store'
import GoogleFittypes  from './redux/GoogleFitRedux/actions';
import googleFit,{Scopes} from 'react-native-google-fit';

const options = {
  scopes: [
    Scopes.FITNESS_ACTIVITY_READ,
    Scopes.FITNESS_ACTIVITY_WRITE,
    Scopes.FITNESS_BODY_READ,
    Scopes.FITNESS_BODY_WRITE,
    Scopes.FITNESS_SLEEP_READ,
    Scopes.FITNESS_SLEEP_WRITE
  ],
}
const App = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    var a
    if(a= await AsyncStorage.getItem('input_caloires')){
    }else{
      AsyncStorage.setItem('input_caloires',JSON.stringify({value: 0}))
    }
      const start = await AsyncStorage.getItem('start');
      const USER_DATA=await AsyncStorage.getItem("USER_DATA")
    if(start){
      if(!USER_DATA){
        NavigationUtils.startLogin()
      }else{
        store.dispatch(loginType.userLoginGoogleSuccess(JSON.parse(USER_DATA)))
        await googleFit.checkIsAuthorized()
        if(!googleFit.isAuthorized){
         const res =await googleFit.authorize(options)
         if(res.success){
          store.dispatch(GoogleFittypes.getDailySteps())
         }
        }else{
          store.dispatch(GoogleFittypes.getDailySteps())
        }
      } 
    }else{
      NavigationUtils.startIntro()
    }  
  });
};
export default App;
