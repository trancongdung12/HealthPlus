import { makeActionCreator, makeConstantCreator } from "../../utils/ReduxUtils";

export const LanguageTypes = makeConstantCreator(
    "CHANGE_LANGUAGE",   
)
const changeLanguage=(data)=>makeActionCreator(LanguageTypes.CHANGE_LANGUAGE, {data})
export default{
    changeLanguage,
}