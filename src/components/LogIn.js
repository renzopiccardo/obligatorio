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
import { login } from "./../redux/actions/userActions";
import { logInUser } from "./../services";

class LogIn extends React.Component {
	//navigateToTodolist = () => this.props.history.push("/todolist");

	constructor(props) {
		super(props);

		this.state = {
			password: "",
			email: ""
		};
	}

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		const { password, email } = this.state;
		//const { dispatch } = this.props;

		logInUser({ email, password })
			.then(result => {
				//dispatch(login(result.data));
				this.props.login(result.data);
				//alert("SUCCESS");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	};

	render() {
		const { email, password } = this.state;
		//const {handleChange} = this.props;

		return this.props.isUserLogged ? (
			<Redirect to="/home/add-team" />
		) : (
			<div className="mt-4">
				<form onSubmit={this.onSubmit}>
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

					<div className="row mt-4">
						<div className="col">
							<button type="submit" className="btn btn-primary">
								Iniciar Sesión
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

//isUserLogged

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state)
	};
}
const mapDispatchToProps = dispatch => {
	return {
		login: user => {
			//dispatch llama a reducers
			dispatch(login(user));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogIn);
