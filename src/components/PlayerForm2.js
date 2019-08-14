import React, {Field} from "react";
import PlayerSelect from "./PlayerSelect";

class PlayerForm2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			players: props.players,
			player:""
		};
	}

	submitAddPlayer = event => {
		event.preventDefault();

		const { addPlayerTeam } = this.props;
		const { player } = this.state;

		addPlayerTeam( player );

		this.setState({
			name: "",
			lastName: "",
			birthDate: "",
			number: ""
		});
	};

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { players } = this.state;

		return (
			<div>
				<h2>Agregar Jugador</h2>
				<form onSubmit={this.submitAddPlayer}>
					<div className="form-group">
						<label htmlFor="PlayerSelect">Select an Option</label>
						<Field
							name="PlayerSelect"
							// component="select"
							label="PlayerSelect"
							component={PlayerSelect}
							players={players}
							className="form-control"
						>
							{/* {people.map(DropDownSelect)} https://stackoverflow.com/questions/40075281/how-to-create-custom-dropdown-field-component-with-redux-form-v6*/}
						</Field>
					</div>
					
					<div className="col-sm-3 mt-4">
						<button className="btn btn-block btn-primary">Agregar</button>
					</div>
				</form>
			</div>
		);
	}
}

export default PlayerForm2;
