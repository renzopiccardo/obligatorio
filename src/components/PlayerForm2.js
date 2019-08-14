import React from "react";

class PlayerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			lastName: "",
			birthDate: "",
			number: ""
		};
	}

	submitAddPlayer = event => {
		event.preventDefault();

		const { addPlayerFN } = this.props;
		const { name, lastName, birthDate, number } = this.state;

		addPlayerFN({ name, lastName, birthDate, number });

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
		const { name, lastName, birthDate, number } = this.state;

		return (
			<div>
				<h2>Agregar Jugador</h2>
				<form onSubmit={this.submitAddPlayer}>
					<div className="form-group">
						<label htmlFor="dropDownSelect">Select an Option</label>
						<Field
							name="dropDownSelect"
							// component="select"
							label="dropDownSelect"
							component={DropDownSelect}
							people={people}
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

export default PlayerForm;
