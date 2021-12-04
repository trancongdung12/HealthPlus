/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import app from './AppRedux/Reducer';
import login from './LoginRedux/Reducer';
import googlefit from './GoogleFitRedux/reducer';
import profile from './Profile/reducer';
import payment from './Payment/reducer';
import language from './Language/reducer';
const rootReducer = combineReducers({
    app,
    login,
    googlefit,
    profile,
    payment,
    language,
  });
export default rootReducer;
