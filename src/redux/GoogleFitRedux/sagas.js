import {put, call, takeLatest} from 'redux-saga/effects';
import googleFitActions, {GoogleFittypes} from './actions';
import NavigationUtils from '../../navigation/Utils';
import googleFit, {Scopes} from 'react-native-google-fit';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileTypes from '../Profile/actions';

const startDay = new Date();
const now = new Date();
startDay.setDate(startDay.getDate() - 6);

const opt = {
  startDate: startDay.toISOString(), // required ISO8601Timestamp
  endDate: now.toISOString(), // required ISO8601Timestamp
  bucketUnit: 'DAY', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
  bucketInterval: 1, // optional - default 1.
};

export function* connectGoogleFitSaga() {
  try {
    const response = yield googleFit.authorize(options);
    response.success
      ? NavigationUtils.startRoot()
      : NavigationUtils.startLogin();
    // console.log("ggfit respone autho ",response);
  } catch (error) {}
}
export function* getDailyStepsSaga() {
  try {
    console.log('opt', opt);
    const res = yield googleFit.getDailyStepCountSamples(opt);
    console.log('googleFit', googleFit);
    yield put(googleFitActions.getDailyStepsSuccess(res[2].steps));
    const user_profile = yield AsyncStorage.getItem('User_profile');
    if (user_profile) {
      yield put(ProfileTypes.SetUpProfileSuccess(JSON.parse(user_profile)));
      yield NavigationUtils.startRoot();
    } else {
      yield NavigationUtils.startProfileSetup();
    }
  } catch (err) {}
}

const googleFitSaga = () => [
  takeLatest(GoogleFittypes.CONNECT_GOOGLEFIT, connectGoogleFitSaga),
  takeLatest(GoogleFittypes.GET_DAILY_STEPS, getDailyStepsSaga),
];
export default googleFitSaga();
