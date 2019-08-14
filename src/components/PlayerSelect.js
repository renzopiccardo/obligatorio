import React from "react";

const PlayerSelect = props => {
	return props.players.map(({ name, _id }, index) => (
		<option value={_id}>{name}</option>
	));
};
export default PlayerSelect;
