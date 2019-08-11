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
import { addResults } from "../services";

class AddResults extends React.Component {
	//navigateToTodolist = () => this.props.history.push("/todolist");

	constructor(props) {
		super(props);

		this.state = {
			team: "",
			colorPrimario: "",
			colorSecundario: "",
			players: [],
			jugador1: ""
		};
	}

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		const {
			team,
			colorPrimario,
			colorSecundario,
			players,
			jugador1
		} = this.state;
		/*
		if (password !== confirmPassword) {
			this.setState({ confirmPassword: "", password: "" });
			return;
		}
		*/
		addResults({
			team,
			colorPrimario,
			colorSecundario,
			players,
			jugador1
		})
			.then(result => {
				alert("SUCCESS");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	};

	render() {
		const {
			team,
			colorPrimario,
			colorSecundario,
			players,
			jugador1
		} = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="row mt-2">
						<div className="col-4">
							<label>resultado</label>
							<input
								type="text"
								name="name"
								value={team}
								onChange={this.handleChange}
								className="form-control"
								required
								autoFocus
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<button className="btn btn-primary">save sdasd</button>
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

export default connect(mapStateToProps)(AddResults);
