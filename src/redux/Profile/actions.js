import { makeActionCreator, makeConstantCreator } from "../../utils/ReduxUtils";


export const ProfileTypes=makeConstantCreator(
    "SETUP_PROFILE",
    "SETUP_PROFILE_SUCCESS",
    "UPDATE_PROFILE_SUCCESS"
)
const SetUpProfile=()=>makeActionCreator(ProfileTypes.SETUP_PROFILE)
const SetUpProfileSuccess=res=>makeActionCreator(ProfileTypes.SETUP_PROFILE_SUCCESS,{res})
const UpdateProfileSuccess=data=>makeActionCreator(ProfileTypes.UPDATE_PROFILE_SUCCESS,{data})
export default{
    SetUpProfile,
    SetUpProfileSuccess,
    UpdateProfileSuccess,
}