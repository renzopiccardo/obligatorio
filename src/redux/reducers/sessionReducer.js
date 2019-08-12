import { ACTIONS } from "../../constants";

const initialState = {
	user: undefined
};

export default function sessionReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.LOGOUT:
			return { ...state, user: undefined };
		case ACTIONS.LOGIN:
			return { ...state, user: action.user };
		case ACTIONS.ADD_TEAM:
			return { ...state, user: action.user }; //
		case ACTIONS.ADD_PLAYER:
			return { 
				...state, players: [...state.players, action.player]
			}
		case ACTIONS.DELETE_PLAYER:
			return state.players.filter(t => t.numero !== action.numero); //
		case ACTIONS.ADD_RESULTS:
			return { ...state, user: action.user }; //
		default:
			return state;
	}
}
