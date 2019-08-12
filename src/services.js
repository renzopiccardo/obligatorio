import axios from "axios";

const API_HOST = "https://taller-frontend.herokuapp.com/api";

export function signUpUser(user) {
	return axios.post(`${API_HOST}/user`, user, {
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export function logInUser({ email, password }) {
	return axios.post(
		`${API_HOST}/user/login`,
		{ email, password },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

export function logOutUser({ userId }) {
	return axios.post(
		`${API_HOST}/user/logout/${userId}`,
		{ userId },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

export function getTeam(teamId) {
	return axios.get(`${API_HOST}/team/${teamId}`);
}

export function addTeamAndPlayers({
	userId,
	name,
	primaryColor,
	secondatyColor,
	players
}) {
	alert("se esta ejecutando addTeamAndPlayers en services");
	return axios.post(
		
		`${API_HOST}/team/${userId}`,
		{ name, primaryColor, secondatyColor, players },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

export function addResults({ userId }) {
	return axios.post(
		`${API_HOST}/teamfdsfsd/${userId}`,
		{ userId },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

export function confirmChampionship({
	userId,
	name,
	primaryColor,
	secondatyColor,
	players
}) {
	return axios.post(
		`${API_HOST}/confirmChampionship/${userId}`,
		/*
		{
  "team1": {
    "id": "string",
    "players": [
      "string"
    ]
  },
  "team2": {
    "id": "string",
    "players": [
      "string"
    ]
  },
  "events": [
    {
      "playerId": "string",
      "minute": 0,
      "type": "GOAL"
    }
  ]
}
		*/
		{ name, primaryColor, secondatyColor, players },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

export function getAllTeamsByChampionshipId(championshipId) {
	return axios.get(`${API_HOST}/team/getAllByChampionshipId/${championshipId}`);
}

export function getMatch(matchId) {
	return axios.get(`${API_HOST}/match/${matchId}`);
}

export function getAllMatchesByChampionshipId(championshipId) {
	return axios.get(
		`${API_HOST}/match/getAllByChampionshipId/${championshipId}`
	);
}

export function editMatch(matchId) {
	return axios.put(`${API_HOST}/match/${matchId}`);
	/*
	{
  "team1": {
    "id": "string",
    "players": [
      "string"
    ]
  },
  "team2": {
    "id": "string",
    "players": [
      "string"
    ]
  },
  "events": [
    {
      "playerId": "string",
      "minute": 0,
      "type": "GOAL"
    }
  ]
}
	*/
}
