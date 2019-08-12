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

export function addTeam(team) {
	//
	return {
		type: ACTIONS.ADD_TEAM,
		team
	};
}

export function addPlayer(player) {
	//
	return {
		type: ACTIONS.ADD_PLAYER,
		player
	};
}

export function deletePlayer(numero) {
	//
	return {
		type: ACTIONS.DELETE_PLAYER,
		numero
	};
}

export function addResults(team) {
	//
	return {
		type: ACTIONS.ADD_RESULTS,
		team
	};
}
