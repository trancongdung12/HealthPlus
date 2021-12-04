/* eslint-disable prettier/prettier */
import {makeActionCreator, makeConstantCreator} from '../../utils/ReduxUtils';

export const LoginTypes = makeConstantCreator(
    'USER_LOGIN',
    'USER_LOGIN_SUCCESS',
    'USER_LOGIN_FAILURE',
    'USER_LOGOUT',
    'USER_LOGIN_GOOGLE',
    'USER_LOGIN_GOOGLE_SUCCESS',
    'LOGOUT_GOOGLE',
  );

const userLogin = data => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginGoogle = () => makeActionCreator(LoginTypes.USER_LOGIN_GOOGLE);
const logoutGoogle = () => makeActionCreator(LoginTypes.LOGOUT_GOOGLE);
const userLoginSuccess = response => makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { reospnse });
const userLoginFailure = error => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });
const userLoginGoogleSuccess = dataGoogle => makeActionCreator(LoginTypes.USER_LOGIN_GOOGLE_SUCCESS, { dataGoogle });

export default {
  userLogin,
  userLoginGoogle,
  logoutGoogle,
  userLoginSuccess,
  userLoginFailure,
  userLoginGoogleSuccess,
};
