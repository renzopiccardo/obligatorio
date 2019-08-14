import React from "react";
import { connect } from "react-redux";
import {
	isUserLogged,
	getUser,
	isChampionshipConfirmed
} from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { confirmChampionship } from "./../redux/actions/userActions";
import { confirmChampionshipFN } from "./../services";

class ConfirmChampionship extends React.Component {
	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();

		confirmChampionshipFN({ userId: this.props.user._id })
			.then(result => {
				this.props.confirmChampionship(result.data);
				alert("SUCCESS confirmChampionshipFN");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	};

	render() {
		//const { email, password } = this.state;
		//const {handleChange} = this.props;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			!this.props.isChampionshipConfirmed && (
				<div className="mt-4">
					<form onSubmit={this.onSubmit}>
						<div className="row mt-4">
							<div className="col-2">
								<button type="submit" className="btn btn-primary">
									Confirmar Campeonato
								</button>
							</div>
						</div>
					</form>
				</div>
			)
		);
	}
}

//isUserLogged

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state),
		user: getUser(state),
		isChampionshipConfirmed: isChampionshipConfirmed(state)
	};
}
const mapDispatchToProps = dispatch => {
	return {
		confirmChampionship: user => {
			//dispatch llama a reducers
			dispatch(confirmChampionship(user));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConfirmChampionship);
