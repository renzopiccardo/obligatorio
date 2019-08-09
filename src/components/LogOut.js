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
import { logout } from "./../redux/actions/userActions";
import { logOutUser } from "./../services";

class LogOut extends React.Component {
	//navigateToTodolist = () => this.props.history.push("/todolist");

	constructor(props) {
		super(props);

		this.state = {
			user: ""
			//??
		};
	}

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		const { user } = this.state;
		//const { dispatch } = this.props;

		logOutUser({ user })
			.then(result => {
				//dispatch(login(result.data));
				this.props.logout(result.data);
				//alert("SUCCESS");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	};

	render() {
		return !this.props.isUserLogged ? (
			<Redirect to="/home/add-team" />
		) : (
			<div className="mt-4">
				<form onSubmit={this.onSubmit}>
					<div className="row mt-4">
						<div className="col">
							<button type="submit" className="btn btn-primary">
								Cerrar Sesión
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
		logout: user => {
			//dispatch llama a reducers
			dispatch(logout(user));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogOut);
