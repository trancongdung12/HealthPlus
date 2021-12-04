/* eslint-disable prettier/prettier */
import {put, call, takeLatest} from 'redux-saga/effects';
import LoginActions, {LoginTypes} from './Actions';
import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import NavigationUtils from '../../navigation/Utils';




export function* userLogoutGoogleSaga(){
  try {
    yield GoogleSignin.revokeAccess();
    yield GoogleSignin.signOut();
    yield put(NavigationUtils.startLogin());
  } catch (error) {
    console.error(error);
  }
}

export function* userLoginGoogleSaga(){
    try {
      
      const userInfo = yield GoogleSignin.signIn();
      yield put(LoginActions.userLoginGoogleSuccess(userInfo));
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
            NavigationUtils.startLogin();
            console.log(error);
          }
    }
}
const loginSagas = () =>[
  takeLatest(LoginTypes.USER_LOGIN_GOOGLE, userLoginGoogleSaga),
  takeLatest(LoginTypes.LOGOUT_GOOGLE, userLogoutGoogleSaga)
];

export default loginSagas();

