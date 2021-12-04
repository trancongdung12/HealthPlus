import AsyncStorage from "@react-native-community/async-storage"
import { NavigationUtils } from "../navigation"

const build= async ()=>{
    const USER_DATA=await AsyncStorage.getItem("USER_DATA")
    !USER_DATA&&NavigationUtils.startLogin()
}
const Config={
    USER_DATA,
    build
}
export default Config