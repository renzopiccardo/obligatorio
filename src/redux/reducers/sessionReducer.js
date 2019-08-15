import { ACTIONS } from "../../constants";

const initialState = {
	user: undefined,
	championshipId: undefined,
	teams: [],
	matches: [],
	championshipTable: undefined
};

export default function sessionReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.LOGOUT:
			return { ...state, user: undefined };
		case ACTIONS.LOGIN:
			return { ...state, user: action.user };
		case ACTIONS.ADD_TEAM:
			return { ...state, teams: [...state.teams, action.team] };
		case ACTIONS.ADD_RESULTS:
			let partidos = state.matches.map((item, index) => {
				if (item._id === action.matchId) {
					return {
						...item, // copy the existing item
						team1: action.team1, // replace
						team2: action.team2,
						events: action.events
					};
				}
				return item; //return default
			});
			return { ...state, matches: partidos };
		case ACTIONS.GET_ALL_TEAMS_BY_CHAMPIONSHIP:
			return { ...state, teams: action.teams }; //foreach?
		case ACTIONS.GET_ALL_MATCHES_BY_CHAMPIONSHIP:
			return { ...state, matches: action.matches }; //foreach?
		case ACTIONS.GET_CHAMPIONSHIP_TABLE:

			return { ...state, matches: action.matches }; //foreach?
		default:
			return state;
	}
}

/*
    {
        "team1": {
            "players": [],
            "id": "5d548d60eda2b30017746f03"
        },
        "team2": {
            "players": [],
            "id": "5d548e24eda2b30017746f53"
        },
        "_id": "5d548e27eda2b30017746f64",
        "championshipId": "5d548d01eda2b30017746efa",
        "events": [
            {
                "_id": "5d5491d6eda2b30017746ff3",
                "playerId": "5d548d60eda2b30017746f07",
                "minute": 9,
                "type": "OWN_GOAL"
            }
        ],
        "__v": 1
    },
*/
