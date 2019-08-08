import { ACTIONS } from "../../constants";

export function login(user) {
  return {
    type: ACTIONS.LOGIN,
    user
  };
}

export function logout() {
  return {
    type: ACTIONS.LOGOUT
  };
}


