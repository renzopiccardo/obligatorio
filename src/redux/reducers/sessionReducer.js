import { ACTIONS } from "../../constants";

const initialState = {
	user: undefined,
	championshipId: undefined,
	teams: [],
	matches: []
};

export default function sessionReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.LOGOUT:
			return { ...state, user: undefined };
		case ACTIONS.LOGIN:
			return { ...state, user: action.user };
		case ACTIONS.ADD_TEAM:
			return { ...state, teams: [...state.teams, action.team]	}
		case ACTIONS.ADD_RESULTS:
			return state.matches.map((item, index) => {
				if(item._id === action.matchId) {
					return {
					...item,  // copy the existing item
					team1: action.team1,  // replace
					team2: action.team2, 
					events: action.events, 
					}
				}
				return item; //return default
				});
		case ACTIONS.GET_ALL_TEAMS_BY_CHAMPIONSHIP:
			return { ...state, teams: action.teams }//foreach?
		case ACTIONS.GET_ALL_MATCHES_BY_CHAMPIONSHIP:
			return { ...state, matches: action.matches }//foreach?
		default:
			return state;
	}
}
