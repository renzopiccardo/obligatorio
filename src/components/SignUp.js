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
import { signup } from "./../redux/actions/userActions";
import { signUpUser } from "./../services";

class SignUp extends React.Component {
	//navigateToTodolist = () => this.props.history.push("/todolist");

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: "",
			confirmPassword: "",
			email: ""
		};
	}

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		const { password, confirmPassword, name, email } = this.state;

		if (password !== confirmPassword) {
			this.setState({ confirmPassword: "", password: "" });
			return;
		}
		signUpUser({ name, email, password })
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
		const { name, email, password, confirmPassword } = this.state;

		return this.props.isUserLogged ? (
			<Redirect to="/home" />
		) : (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="row mt-2">
						<div className="col-4">
							<label>Nombre</label>
							<input
								type="text"
								name="name"
								value={name}
								onChange={this.handleChange}
								className="form-control"
								required
								autoFocus
							/>
						</div>
					</div>

					<div className="row mt-2">
						<div className="col-4">
							<label>Email</label>
							<input
								type="email"
								name="email"
								value={email}
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-2">
						<div className="col-4">
							<label>Contraseña</label>
							<input
								type="password"
								name="password"
								value={password}
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-2">
						<div className="col-4">
							<label>Repetir contraseña</label>
							<input
								type="password"
								name="confirmPassword"
								value={confirmPassword}
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<button className="btn btn-primary">
								Registrarse
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state)
	};
}

const mapDispatchToProps = dispatch => {
	return {
		signup: team => {
			dispatch(signup(team));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
