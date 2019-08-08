import { ACTIONS } from "../../constants";
const initialState = {
    user: undefined
}
export default function userReducer(state = initialState, action){
    switch(action.type){
        case ACTIONS.LOGOUT:
            return {...state, user: undefined};
        case ACTIONS.LOGIN:
            return {...state, user: action.user};    
        default:
            return state;
    }
}