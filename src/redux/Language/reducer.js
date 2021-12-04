import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LanguageTypes } from './actions';

export const INITIAL_STATE = Immutable({
  language: {data: {language: 'vi'}},
});

export const SetLanguage = (state, language) =>
  state.merge({ 
    language: language,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
    [LanguageTypes.CHANGE_LANGUAGE]: SetLanguage,
    });

export default reducer
