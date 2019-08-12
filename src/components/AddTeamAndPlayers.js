import React from "react";
import { connect } from "react-redux";
import { isUserLogged } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import * as userActions from "./../redux/actions/userActions";
import { addTeamAndPlayers } from "./../services";
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

	componentDidUpdate(prevProps) {
		if(prevProps.variableInProps !== this.props.variableInProps){
		  this.setState({variableInState: this.props.variableInProps })
		}
	  }

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	addPlayerFN = player => {
		this.props.dispatch(userActions.addPlayer(player));
	};

	deletePlayer = numero => {
		this.props.dispatch(userActions.deletePlayer(numero));
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
		
		addTeamAndPlayers({
			nombreEquipo,
			colorPrimario,
			colorSecundario,
			players
		})
			.then(result => {
				alert("SUCCESS");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
			*/
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
								type="text"
								name="colorSecundario"
								value={colorSecundario}
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<PlayerForm addPlayerFN={this.addPlayerFN} />
							<PlayerList players={players} deletePlayer={this.deletePlayer} />
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
		);
	}
}

//export default SignUp;

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state)
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addTeamAndPlayers: team => {
			//dispatch llama a reducers
			dispatch(addTeamAndPlayers(team));
		},
		dispatch
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTeamAndPlayers);
