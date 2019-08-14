import axios from "axios";

const API_HOST = "https://taller-frontend.herokuapp.com/api";

//USER
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

export function confirmChampionshipFN({ userId }) {
	return axios.post(
		`${API_HOST}/user/confirmChampionship/${userId}`,
		{ userId },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
}

//TEAMS
export function addTeamAndPlayersFN({
	userId,
	name,
	primaryColor,
	secondaryColor,
	players
}) {
	//alert(userId + " " + name + " " + primaryColor + " " + secondaryColor + " " + players[0].birthDate);
	return axios.post(
		`${API_HOST}/team/${userId}`,
		{ name, primaryColor, secondaryColor, players },
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

export function getAllTeamsByChampionshipId({championshipId}) {
	return axios.get(`${API_HOST}/team/getAllByChampionshipId/${championshipId}`);
}

//MATCHES

export function getMatch(matchId) {
	return axios.get(`${API_HOST}/match/${matchId}`);
}

export function finishMatch({ matchId, team1, team2, events }) {
	return axios.put(
		`${API_HOST}/match/${matchId}`,
		{ team1, team2, events },
		{
			headers: {
				"Content-Type": "application/json"
			}
		}
	);
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

export function getAllMatchesByChampionshipId({championshipId}) {
  //https://taller-frontend.herokuapp.com/api/match/getAllbyChampionshipId/5d4b7943b5f1650017f37f4e
	return axios.get(
		`${API_HOST}/match/getAllByChampionshipId/${championshipId}`
	);
}
