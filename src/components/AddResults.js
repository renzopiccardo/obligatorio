import React, { Fragment } from "react";
import { connect } from "react-redux";
import { isUserLogged, getChampionshipId, getUser } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { getAllTeamsByChampionshipId, getAllMatchesByChampionshipId } from "../services";
import EditMatch from "./../components/EditMatch";
import { addResults, getAllTeams, getAllMatches } from "./../redux/actions/userActions";

class AddResults extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			teams: [],
			matches: []
		};
	}

	componentDidMount() {
		getAllTeamsByChampionshipId({championshipId: this.props.championshipId})
			.then(result => {
				this.props.getAllTeams(result.data);

				let teams = [...this.state.teams];
				teams = result.data;
				this.setState({ teams });
				//alert("SUCCESS getAllTeamsByChampionshipId");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
			});

		getAllMatchesByChampionshipId({championshipId: this.props.championshipId})
			.then(result => {
				this.props.getAllMatches(result.data);

				let matches = [...this.state.matches];
				matches = result.data;
				this.setState({ matches });
				//alert("SUCCESS getAllMatchesByChampionshipId");
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
		const { teams, matches } = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
				matches.map(
					({ team1, team2, events, _id }, index) => (
						<Fragment key={index}>
							<hr />
							<EditMatch
								team11={team1}
								team22={team2}
								events={events}
								matchId={_id}
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

const mapDispatchToProps = dispatch => {
	return {
		addResults: result => {
			dispatch(addResults(result));
		},
		getAllTeams: result => {
			dispatch(getAllTeams(result));
		},
		getAllMatches: result => {
			dispatch(getAllMatches(result));
		},
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddResults);
