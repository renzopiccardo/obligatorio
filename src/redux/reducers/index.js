import { combineReducers } from "redux";
import login from "./userReducer";

const rootReducer = combineReducers({
    login
})

export default rootReducer;