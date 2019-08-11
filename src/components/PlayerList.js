import React, { Fragment } from "react";
import Player from "./Player";

const PlayerList = props => {
	return props.players.map(
		({ nombre, apellido, numero, fechaNacimiento }, index) => (
			<Fragment key={index}>
				<hr />
				<Player
					nombre={nombre}
					apellido={apellido}
					numero={numero}
					fechaNacimiento={fechaNacimiento}
					deleteTask={props.deleteTask}
				/>
			</Fragment>
		)
	);
};

export default PlayerList;
