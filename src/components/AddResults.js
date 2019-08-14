import React from "react";
import { connect } from "react-redux";
import { isUserLogged, getChampionshipId } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { getAllTeamsByChampionshipId } from "../services";

class AddResults extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			teams: [],
			matches: []
		};
	}

	componentDidMount() {
		getAllTeamsByChampionshipId({
			championshipId: this.props.championshipId._id,
		})
			.then(result => {
				this.props.getAllTeams(result.data);
				alert("SUCCESS getAllTeamsByChampionshipId");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});
	}

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { team1, team2, events } = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
				props.players.map(
					({ name, lastName, birthDate, number }, index) => (
						<Fragment key={index}>
							<hr />
							<Player
								name={name}
								lastName={lastName}
								birthDate={birthDate}
								number={number}
								deletePlayer={props.deletePlayer}
							/>
						</Fragment>
					)
				)
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

export default connect(mapStateToProps)(AddResults);
