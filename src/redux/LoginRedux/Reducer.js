/* eslint-disable prettier/prettier */
import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from './Actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  loginGoogle: false,
  errorLogin: null,
  loginResponse: null,
  token: null,
  loginType: '',
  dataUser: null,
});

export const userLoginGoogle = (state) =>
  state.merge({ loginGoogle: true, errorLogin: null });

export const logoutGoogle = (state) =>
  state.merge({ loginGoogle: false, dataUser: null });

export const userLoginGoogleSuccess = (state, { dataGoogle }) =>
  state.merge({
    dataUser: dataGoogle,
    });

export const userLogin = (state, { response }) =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    loginType: 'email',
    token: response.token,
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGIN_GOOGLE]: userLoginGoogle,
  [LoginTypes.USER_LOGIN_GOOGLE_SUCCESS]: userLoginGoogleSuccess,
  [LoginTypes.LOGOUT_GOOGLE]: logoutGoogle,

  // USER_LOGIN: userLogin

});

export default reducer;
