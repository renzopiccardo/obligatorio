import React from "react";
import { connect } from "react-redux";
import {
	isUserLogged,
	getChampionshipId,
	getUser
} from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { finishMatch, getTeam } from "../services";
import { addResults } from "./../redux/actions/userActions";
import PlayerForm from "./../components/PlayerForm";
import PlayerList from "./../components/PlayerList";
import PlayerSelect from "./PlayerSelect";

class EditMatch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			matchId: props.matchId,
			team1: props.team1,
			team2: props.team2,
			events: props.events,
			players1: [],
			players2: [],
			fullTeam1: [],
			fullTeam2: [],
			tipo: "",
			jugador: "",
			minuto: ""
		};
		/*
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
		  */
	}

	componentDidMount() {
		const { team1, team2 } = this.state;
		getTeam({ teamId: team1.id })
			.then(result => {
				let players1 = [...this.state.players1];
				players1 = result.data.players;
				this.setState({ players1 });
				let fullTeam1 = [...this.state.fullTeam1];
				fullTeam1 = result.data;
				this.setState({ fullTeam1 });
				//alert("SUCCESS getTeam 1");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
		getTeam({ teamId: team2.id })
			.then(result => {
				let players2 = [...this.state.players2];
				players2 = result.data.players;
				this.setState({ players2 });
				let fullTeam2 = [...this.state.fullTeam2];
				fullTeam2 = result.data;
				this.setState({ fullTeam2 });
				//alert("SUCCESS getTeam 2");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	}

	addPlayerTeam1 = player => {
		let players = [...this.state.team1.players];
		players.push(player);
		this.setState({ players });
	};

	addPlayerTeam2 = player => {
		let players = [...this.state.team2.players];
		players.push(player);
		this.setState({ players });
	};

	deletePlayer = number => {
		let players = [...this.state.team1.players];
		players = players.filter(p => p.number !== number);
		this.setState({ players });
	};

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onClickEvento = event => {
		alert("onClickEvento");
		const { jugador, minuto, tipo } = this.state;
		let events = [...this.state.events];
		events.push({ playerId: jugador, minute: minuto, type: tipo });
		this.setState({ events });
		this.setState({
			jugador: "",
			minuto: "",
			tipo: ""
		});
	};

	onSubmitt = event => {
		event.preventDefault();
		const { matchId, team1, team2, events } = this.state;

		finishMatch({
			matchId,
			team1,
			team2,
			events
		})
			.then(result => {
				this.props.addResults(result.data);
				alert("SUCCESS finishMatch");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	};

	render() {
		const {
			team1,
			team2,
			events,
			players1,
			players2,
			fullTeam1,
			fullTeam2,
			jugador,
			tipo,
			minuto
		} = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			<div>
				<h2>
					Editar resultados {fullTeam1.name} vs {fullTeam2.name}
				</h2>
				<div className="row mt-4">
					<h3>Jugadores {fullTeam1.name}</h3>
					<div className="col">
						<PlayerList players={players1} deletePlayer={this.deletePlayer} />
					</div>
				</div>
				<div className="row mt-4">
					<h3>Jugadores {fullTeam2.name}</h3>
					<div className="col">
						<PlayerList players={players2} deletePlayer={this.deletePlayer} />
					</div>
				</div>
				<div>
					<div className="row mt-2">
						<div className="col-4">
							<label>tipo</label>
							<select
								name="tipo"
								onChange={this.handleChange}
								className="form-control"
								value={tipo}
							>
								<option value="" selected />
								<option value="GOAL">GOAL</option>
								<option value="OWN_GOAL">OWN_GOAL</option>
								<option value="YELLOW_CARD">YELLOW_CARD</option>
								<option value="RED_CARD">RED_CARD</option>
							</select>
						</div>

						<div className="col-4">
							<select
								name="jugador"
								onChange={this.handleChange}
								className="form-control"
								value={jugador}
							>
								<option value="" selected />
								<PlayerSelect players={players1.concat(players2)} />
							</select>
						</div>

						<div className="col-4">
							<label>Minuto</label>
							<input
								type="number"
								min="0"
								max="90"
								name="minuto"
								value={minuto}
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<button onClick={this.onClickEvento} className="btn btn-primary">
								Agregar evento
							</button>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<button onClick={this.onSubmitt} className="btn btn-primary">
								Guardar partido
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

//export default SignUp;

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state),
		championshipId: getChampionshipId(state),
		user: getUser(state)
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addResults: result => {
			//dispatch llama a reducers
			dispatch(addResults(result));
		},
		dispatch
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditMatch);
