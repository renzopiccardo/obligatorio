import { ACTIONS } from "../../constants";

const initialState = {
	user: undefined,
	teams: []
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
			return { ...state, user: action.user }; //
		default:
			return state;
	}
}
