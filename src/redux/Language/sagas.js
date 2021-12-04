import {put, call, takeLatest} from 'redux-saga/effects';
import LanguageAction, {LanguageTypes}  from './actions';
import NavigationUtils from '../../navigation/Utils';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../i18n/i18n';

export function* SetLanguageSaga({data}){
  try {
    I18n.locale = data.language;
    NavigationUtils.startRoot();
  } catch (error) {
    console.log( error );
  }
}
const languageSaga = () =>[
    takeLatest(LanguageTypes.CHANGE_LANGUAGE, SetLanguageSaga),
];
export default languageSaga()
