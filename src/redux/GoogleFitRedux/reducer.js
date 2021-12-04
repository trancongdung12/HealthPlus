import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { GoogleFittypes } from './actions';

export const INITIAL_STATE = Immutable({
  isLoaing:false,
  dailySteps:null
});
export const connectGoogleFit = (state) =>
  state.merge({ isLoaing: true});

export const connectGoogleFitSuccess = (state, { data }) =>
  state.merge({
    data: data,
    });

export const getDailySteps =(state)=>state.merge({isLoaing:true})

export const getDailyStepsSuccess =(state, data)=>state.merge({dailySteps: data.res})



const reducer = makeReducerCreator(INITIAL_STATE, {
    [GoogleFittypes.CONNECT_GOOGLEFIT]: connectGoogleFit,
    [GoogleFittypes.CONNECT_GOOGLEFIT_SUCCESS]: connectGoogleFitSuccess,
    [GoogleFittypes.GET_DAILY_STEPS]: getDailySteps,
    [GoogleFittypes.GET_DAILY_STEPS_SUCCESS]: getDailyStepsSuccess
    });
export default reducer