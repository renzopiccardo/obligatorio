import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
	const myStyle = { color: "#F02222" };

	return this.props.isUserLogged ? (
		<Redirect to="/home/add-team" />
	) : (
		<nav>
			<NavLink to="/" activeStyle={myStyle} exact>
				{" "}
				Log In{" "}
			</NavLink>
			{" | "}
			<NavLink to="/sign-up" activeStyle={myStyle}>
				{" "}
				Sign Up{" "}
			</NavLink>
		</nav>
	);
};

export default Header;
