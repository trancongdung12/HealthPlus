/* eslint-disable prettier/prettier */
import {takeLatest, select} from 'redux-saga/effects';
import {AppTypes} from '../AppRedux/Actions';
// import http from '../../api/http';
// import http from '../../api/http';
import {NavigationUtils} from '../../navigation';

export function* startupSaga() {
  try {
    // const { token } = yield select((state) => state.login);
    // http.setAuthorizationHeader(token);
    // if (token){
    //   NavigationUtils.startMainContent();
    // } else {
    //   NavigationUtils.startLogin();
    // }
    // NavigationUtils.startRoot();
    // const { token } = yield select((state) => state.login);
    // http.setAuthorizationHeader(token);
    // NavigationUtils.startMainContent();
    // NavigationUtils.startSeeAllBook();
    // NavigationUtils.startIntro();
    //NavigationUtils.startRegister();
    // NavigationUtils.startBottomTab();
    // NavigationUtils.startLogin();

    //     if (token) {
    //       NavigationUtils.startMainContent();
    //     } else {
    //       NavigationUtils.startLoginContent();
    //     }
  } catch (error) {
    // NavigationUtils.startLoginContent();
    console.log(error);
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();