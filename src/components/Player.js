import React from "react";

class Player extends React.Component {
	render() {
		const { name, lastName, birthDate, number } = this.props;

		return (
			<div className="alert" role="alert">
				<div className="row mt-3">
					<div className="col-3">{name}</div>
					<div className="col-3">{lastName}</div>
					<div className="col-2">{birthDate}</div>
					<div className="col-3">{number}</div>
					<div className="col-1">
						<button
							type="button"
							className="btn btn-danger float-right"
							aria-label="Close"
							style={{ outline: "none" }}
							onClick={() => this.props.deletePlayer(number)}
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
