import { ACTIONS } from "../../constants";

const initialState = {
	user: undefined,
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
					// Find the item with the matching id
					if(item.id === action.payload.userId) {
					  // Return a new object
					  return {
						...item,  // copy the existing item
						email: action.payload.newEmail  // replace the email addr
					  }
					}
				
					// Leave every other item unchanged
					return item;
				  });
		case ACTIONS.GET_ALL_TEAMS_BY_CHAMPIONSHIP:
			return { ...state, teams: [...state.teams, action.team]	}//foreach?
		case ACTIONS.GET_ALL_MATCHES_BY_CHAMPIONSHIP:
				return { ...state, matches: [...state.matches, action.match]	}//foreach?
		default:
			return state;
	}
}
