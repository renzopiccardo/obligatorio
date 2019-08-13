import React, { Fragment } from "react";
import Player from "./Player";

const PlayerList = props => {
	return props.players.map(
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
	);
};

export default PlayerList;
