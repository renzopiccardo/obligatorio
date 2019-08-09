import { ACTIONS } from "../../constants";

export function login(user) {
	return {
		type: ACTIONS.LOGIN,
		user
	};
}

export function signup(team) {
	return {
		type: ACTIONS.SIGNUP,
		team
	};
}

export function logout() {
	return {
		type: ACTIONS.LOGOUT
	};
}
