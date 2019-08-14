import React from "react";
import { connect } from "react-redux";
import { isUserLogged, getChampionshipId, getUser } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";
import { finishMatch, getTeam } from "../services";
import { addResults } from "./../redux/actions/userActions";

class EditMatch extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            matchId: props.matchId,
            team1: props.team1,
            team2: props.team2,
            events: props.events,
            fullTeam1: [],
            fullTeam2: []
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
		getTeam( { teamId: team1.id } )
			.then(result => {
				let fullTeam1 = [...this.state.fullTeam1];
				fullTeam1 = result.data;
				this.setState({ fullTeam1 });
				alert("SUCCESS getTeam 1");
				console.log(result);
			})
			.catch(err => {
				alert("ERROR");
				console.log(err);
            });
        getTeam( { teamId: team2.id } )
            .then(result => {
                let fullTeam2 = [...this.state.fullTeam2];
                fullTeam2 = result.data;
                this.setState({ fullTeam2 });
                alert("SUCCESS getTeam 2");
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

	deletePlayer = number => {
		let players = [...this.state.team1.players];
		players = players.filter(p => p.number !== number);
		this.setState({ players });
	};

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
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
		const { team1, team2, events } = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			<div>
                <h2>Editar resultados {team1.name} vs {team2.name}</h2>
				<form onSubmit={this.onSubmit}>
					

					<div className="row mt-2">
						<div className="col-4">
							<label>Evento</label>
							<input
								type="text"
								name="events"
								value={events} //
								onChange={this.handleChange}
								className="form-control"
								required
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col">
							<button className="btn btn-primary">Guardar cambios</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(EditMatch);
