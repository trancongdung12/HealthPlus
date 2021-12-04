import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  update: false,
  isLoaing: false,
  data: null,
});

export const SetUpProfile = (state) =>
  state.merge({ isLoaing: true});

export const SetUpProfileSuccess = (state,  data ) =>
  state.merge({
    data: data.res,
    });
export const UpdateProfileSuccess = (state, data) =>
    state.merge({
      data: data.data,
      update: true,
    });

const reducer = makeReducerCreator(INITIAL_STATE, {
    [ProfileTypes.SETUP_PROFILE]: SetUpProfile,
    [ProfileTypes.SETUP_PROFILE_SUCCESS]: SetUpProfileSuccess,
    [ProfileTypes.UPDATE_PROFILE_SUCCESS]: UpdateProfileSuccess,
    });

export default reducer
