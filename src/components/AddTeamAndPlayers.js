import React from "react";
import { connect } from "react-redux";
import { isUserLogged, getUser } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { addTeam } from "./../redux/actions/userActions";
import { deletePlayer } from "./../redux/actions/userActions";
import { addTeamAndPlayersFN } from "./../services";
import PlayerForm from "./../components/PlayerForm";
import PlayerList from "./../components/PlayerList";

class AddTeamAndPlayers extends React.Component {
	//navigateToTodolist = () => this.props.history.push("/todolist");

	constructor(props) {
		super(props);

		this.state = {
			team: "",
			colorPrimario: "",
			colorSecundario: "",
			players: []
		};
	}
/* 
	componentDidUpdate(prevProps) {
		if(prevProps.variableInProps !== this.props.variableInProps){
		  this.setState({variableInState: this.props.variableInProps })
		}
	  }
*/
	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	addPlayerFN = player => {
		let players = [...this.state.players];
		players.push(player);
		this.setState({players})
		//this.props.dispatch(userActions.addPlayer(player));
		//...state, players: [...state.players, action.player]
	};

	deletePlayer = numero => {
		//this.props.dispatch(deletePlayer(numero));
		let players = [...this.state.players];
		players.filter(p => p.numero !== numero);;
		this.setState({players})
	};

	onSubmit = event => {
		event.preventDefault();
		const {
			nombreEquipo,
			colorPrimario,
			colorSecundario,
			players
		} = this.state;
		/*
		if (password !== confirmPassword) {
			this.setState({ confirmPassword: "", password: "" });
			return;
		}
		*/
		addTeamAndPlayersFN({
			userId: this.props.user._id, 
			nombreEquipo,
			colorPrimario,
			colorSecundario,
			players
		})
			.then(result => {
				this.props.addTeamAndPlayers(result.data);
				//alert("SUCCESS");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR en onSubmit - addTeamAndPlayers");
				console.log(err);
			});
			
	};

	render() {
		const {
			nombreEquipo,
			colorPrimario,
			colorSecundario,
			players
		} = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			<div className="mt-4">

				<div className="row mt-4">
					<div className="col">
						<PlayerForm addPlayerFN={this.addPlayerFN} />
						<PlayerList players={players} deletePlayer={this.deletePlayer} />
					</div>
				</div>

				<div className="row mt-4">
					<div className="col">
						<h1>Agregar Equipo</h1>
						<form onSubmit={this.onSubmit}>
							<div className="row mt-4">
								<div className="col-4">
									<label>Nombre del equipo</label>
									<input
										type="text"
										name="nombreEquipo"
										value={nombreEquipo}
										onChange={this.handleChange}
										className="form-control"
										required
										autoFocus
									/>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-4">
									<label>Color primario</label>
									<input
										type="color"
										name="colorPrimario"
										value={colorPrimario}
										onChange={this.handleChange}
										className="form-control"
										required
									/>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-4">
									<label>Color secundario</label>
									<input
										type="color"
										name="colorSecundario"
										value={colorSecundario}
										onChange={this.handleChange}
										className="form-control"
										required
									/>
								</div>
							</div>



							<div className="row mt-5">
								<div className="col">
									<button className="btn btn-primary">
										Registrar equipo y jugadores
									</button>
								</div>
							</div>
						</form>
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
		user: getUser(state)
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTeam: team => {
			//dispatch llama a reducers
			dispatch(addTeam(team));
		},
		dispatch
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTeamAndPlayers);
