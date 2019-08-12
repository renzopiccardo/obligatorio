import React from "react";

class PlayerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nombre: "",
			apellido: "",
			numero: "",
			fechaNacimiento: ""
		};
	}

	submitAddPlayer = event => {
		event.preventDefault();

		const { addPlayerFN } = this.props;
		const { nombre, apellido, numero, fechaNacimiento } = this.state;

		addPlayerFN({ nombre, apellido, numero, fechaNacimiento });

		this.setState({
			nombre: "",
			apellido: "",
			numero: "",
			fechaNacimiento: ""
		});
	};

	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { nombre, apellido, numero, fechaNacimiento } = this.state;

		return (
			<div>
				<h2> Player Form </h2>
				<form onSubmit={this.submitAddPlayer}>
					<div className="row">
						<div className="col-3">
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese el nombre..."
								value={nombre}
								name="nombre"
								onChange={this.handleChange}
							/>
						</div>

						<div className="col-3">
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese el apellido..."
								name="apellido"
								value={apellido}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-3">
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese el numero..."
								name="numero"
								value={numero}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-3">
							<input
								className="form-control"
								type="text"
								placeholder="Ingrese la fec..."
								name="fechaNacimiento"
								value={fechaNacimiento}
								onChange={this.handleChange}
							/>
						</div>
						<div className="col-sm-3 mt-4">
							<button className="btn btn-block btn-primary">
								Agregar Jugador
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default PlayerForm;