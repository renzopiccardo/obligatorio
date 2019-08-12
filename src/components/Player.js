import React from "react";

class Player extends React.Component {
	render() {
		const { nombre, apellido, numero, fechaNacimiento } = this.props;

		return (
			<div className="alert" role="alert">
				<div className="row mt-3">
					<div className="col-3">{nombre}</div>
					<div className="col-3">{apellido}</div>
					<div className="col-2">{numero}</div>
					<div className="col-3">{fechaNacimiento}</div>
					<div className="col-1">
						<button
							type="button"
							className="btn btn-danger float-right"
							aria-label="Close"
							style={{ outline: "none" }}
							onClick={() => this.props.deletePlayer(numero)}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Player;
