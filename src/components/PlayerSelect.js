import React from "react";
import PropTypes from 'prop-types'

class PlayerSelect extends React.Component {
	// eslint-disable-line react/prefer-stateless-function

	renderSelectOptions = player => (
		<option key={player.number} value={player.number}>
			{player.name}
		</option>
	);

	render() {
		const { input, label } = this.props;
		return (
			<div>
				{/* <label htmlFor={label}>{label}</label> */}
				<select {...input}>
					<option value="">-</option>
					{this.props.players.map(this.renderSelectOptions)}
				</select>
			</div>
		);
	}
}

// function DropDownSelect(person) {
//   return (
//     <option key={person} value={person}>{person}</option>
//   );
// }
/*
App.propTypes = {
 propArray: PropTypes.array.isRequired, 
 propBool: PropTypes.bool.isRequired,
 propFunc: PropTypes.func,
 propNumber: PropTypes.number,
 propString: PropTypes.string,
 propObject: PropTypes.object
}

*/
PlayerSelect.propTypes = {
	players: React.PropTypes.array,
	input: React.PropTypes.object,
	label: React.PropTypes.string
};

export default PlayerSelect;
