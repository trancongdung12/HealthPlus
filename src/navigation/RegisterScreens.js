/* eslint-disable prettier/prettier */
import React from 'react';
import {Navigation} from 'react-native-navigation';
// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import store from '../redux/Store';
import Home from '../screens/Home';
import Health from '../screens/Health/Index';
import Upgrade from '../screens/Upgrade/Index';
import Announcement from '../screens/Announcement/Index';
import User from '../screens/User/Index';
import Intro from '../screens/Intro/index';
import Login from '../screens/Authentication/login';
import EmailResetPassword from '../screens/Authentication/emailResetPass';
import VerifyCode from '../screens/Authentication/verifyCode';
import ResetPassword from '../screens/Authentication/resetPassword';
import RegisterUser from '../screens/Authentication/register';
import EditInformation from '../screens/Authentication/editInformation';
import StepsCounter from '../screens/StepsCounter';
import ConnectGGFit from '../screens/Authentication/ConnectGGFit';
import Generality from '../screens/Home/generality';
import ProfileSetup from '../screens/Authentication/ProfileSetup';
import SettingLanguage from '../screens/Setting/language';
import FoodDetection from '../screens/FoodDetection';
import MeasureHeartBeat from '../screens/MeasureHeartBeat';
import TrackSleep from '../screens/TrackSleep';
import Doctors from '../screens/Doctors';
import InfoDoctor from '../screens/Doctors/infoDoctor';
import SkinDetection from '../screens/SkinDetection/index';
import ChatWithDoctor from '../screens/Chat';

const SCREENS = {
  Home,
  Health,
  Upgrade,
  Announcement,
  User,
  Intro,
  Login,
  EmailResetPassword,
  VerifyCode,
  ResetPassword,
  RegisterUser,
  EditInformation,
  StepsCounter,
  ConnectGGFit,
  Generality,
  ProfileSetup,
  SettingLanguage,
  FoodDetection,
  MeasureHeartBeat,
  TrackSleep,
  Doctors,
  InfoDoctor,
  SkinDetection,
  ChatWithDoctor,
};

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
function registerScreens(store) {
  Object.keys(SCREENS).map(screenName => {
    Navigation.registerComponent(
      screenName,
      () => ReduxProvider(SCREENS[screenName]),
      () => SCREENS[screenName],
    );
  });
}
export default registerScreens;
