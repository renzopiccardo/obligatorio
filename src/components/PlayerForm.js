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
					<div className="row">
						<div className="col-3">
							<label>Nombre</label>
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese el nombre..."
								name="name"
								value={name}
								onChange={this.handleChange}
							/>
						</div>

						<div className="col-3">
							<label>Apellido</label>
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese el apellido..."
								name="lastName"
								value={lastName}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-3">
							<label>Fecha de nacimiento</label>
							<input
								className="form-control"
								type="date"
								placeholder="Ingrese la fecha de nacimiento..."
								name="birthDate"
								value={birthDate}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-3">
							<label>Numero</label>
							<input
								className="form-control"
								type="number"
								placeholder="Ingrese el numero..."
								name="number"
								value={number}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-sm-3 mt-4">
							<button className="btn btn-block btn-primary">
								Agregar
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default PlayerForm;
