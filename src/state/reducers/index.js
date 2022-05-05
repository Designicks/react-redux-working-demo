import { combineReducers } from "redux";
import Main,{incDecAction,setUsernameAction} from "./amountReducer";
// import setUsernameAction from "./usernameReducer";

const reducers = combineReducers({
    amount : incDecAction,
    username : setUsernameAction,
    // username: setUsernameAction
})

export default reducers;