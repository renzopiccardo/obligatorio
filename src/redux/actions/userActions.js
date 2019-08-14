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

export function addResults(result) {
	//
	return {
		type: ACTIONS.ADD_RESULTS,
		result
	};
}

export function confirmChampionship(user) {
	//
	return {
		type: ACTIONS.CONFIRM_CHAMPIONSHIP,
		user
	};
}

export function getAllTeams(championshipId) {
	//
	return {
		type: ACTIONS.GET_ALL_TEAMS_BY_CHAMPIONSHIP,
		championshipId
	};
}

export function getAllMatches(championshipId) {
	//
	return {
		type: ACTIONS.GET_ALL_MATCHES_BY_CHAMPIONSHIP,
		championshipId
	};
}
