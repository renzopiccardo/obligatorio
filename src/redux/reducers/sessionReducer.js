import { ACTIONS } from "../../constants";

const initialState = {
  user: undefined
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOGOUT:
      return { ...state, user: undefined };
    case ACTIONS.LOGIN:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
