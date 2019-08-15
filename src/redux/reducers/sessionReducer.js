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

			var jugadoresDatos = [];
			var equiposDatos = [];
			const {teamss} = [...state.teams];
			const {matchess} = [...state.matches];
			teamss.forEach(t => {
				t.players.forEach(p => {
					let jugador = {_id: p._id, nombre: p.name, goles: 0}
					jugadoresDatos.push(jugador);
				});
				let equipoDatos = {id: t.id, puntos: 0, gf: 0, gc: 0, puntosAmarillas:0, puntosRojas: 0}
				equiposDatos.push(equipoDatos);
			});
			matchess.forEach(m => {
				var jugadoresEquipo1 = m.team1.players;
				var jugadoresEquipo2 = m.team2.players;
				var golesEquipo1 = 0;
				var golesEquipo2 = 0;
				var amarillasEquipo1 = 0;
				var amarillasEquipo2 = 0;
				var rojasEquipo1 = 0;
				var rojasEquipo2 = 0;
				var golesContraEquipo1 = 0;
				var golesContraEquipo2 = 0;

				m.events.forEach(e => {
					switch(e.type){
						case "GOAL":
							jugadoresEquipo1.find(j => j.playerId === e.playerId) ? golesEquipo1++ : golesEquipo2++;
							break;
						case "OWN_GOAL":
							jugadoresEquipo1.find(j => j.playerId === e.playerId) ? golesContraEquipo1++ : golesContraEquipo2++;
							break;
						case "YELLOW_CARD":
							jugadoresEquipo1.find(j => j.playerId === e.playerId) ? amarillasEquipo1++ : amarillasEquipo2++;
							break;
						case "RED_CARD":
							jugadoresEquipo1.find(j => j.playerId === e.playerId) ? rojasEquipo1++ : rojasEquipo2++;
							break;
						default:	
					}
				});

				var equipo1 = equiposDatos.find(e => e.id === m.team1.id);
				var equipo2 = equiposDatos.find(e => e.id === m.team2.id);

				//gf
				equipo1.gf = equipo1.gf + golesEquipo1;
				equipo2.gf = equipo2.gf + golesEquipo2;

				//gc
				equipo1.gc = equipo1.gc + golesEquipo2;
				equipo2.gc = equipo2.gc + golesEquipo1;

				//amarillas
				equipo1.puntosAmarillas = equipo1.puntosAmarillas + amarillasEquipo1;
				equipo2.puntosAmarillas = equipo2.puntosAmarillas + amarillasEquipo2;

				//rojas
				equipo1.puntosRojas = equipo1.puntosRojas + (rojasEquipo1 * 3);
				equipo2.puntosRojas = equipo2.puntosRojas + (rojasEquipo2 * 3);

				//goles
				if(golesEquipo1 > golesEquipo2){
					equipo1.puntos = equipo1.puntos + 3;
				}
				else if(golesEquipo1 < golesEquipo2){
					equipo2.puntos = equipo2.puntos + 3;
				}
				else if(golesEquipo1 === golesEquipo2){
					equipo1 = equiposDatos.find(e => e.id === m.team1.id);
					equipo1.puntos = equipo1.puntos++;
					equipo2 = equiposDatos.find(e => e.id === m.team2.id);
					equipo2.puntos = equipo2.puntos++;
				}


			});

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
