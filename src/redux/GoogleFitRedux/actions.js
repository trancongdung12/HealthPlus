import { makeActionCreator, makeConstantCreator } from "../../utils/ReduxUtils";

export const GoogleFittypes=makeConstantCreator(
    "CONNECT_GOOGLEFIT",
    "CONNECT_GOOGLEFIT_SUCCESS",
    "GET_DAILY_STEPS",
    "GET_DAILY_STEPS_SUCCESS"
    
)
const connectGoogleFit=()=>makeActionCreator(GoogleFittypes.CONNECT_GOOGLEFIT)
const connectGoogleFitSuccess=res=>makeActionCreator(GoogleFittypes.CONNECT_GOOGLEFIT_SUCCESS,{res})
const getDailySteps=()=>makeActionCreator(GoogleFittypes.GET_DAILY_STEPS)
const getDailyStepsSuccess=(res)=>makeActionCreator(GoogleFittypes.GET_DAILY_STEPS_SUCCESS,{res})
export default{
    connectGoogleFit,
    connectGoogleFitSuccess,
    getDailySteps,
    getDailyStepsSuccess
}