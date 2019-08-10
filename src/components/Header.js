import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { isUserLogged } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";

const Header = props => {
	const myStyle = { color: "#F02222" };

	return this.props.isUserLogged ? (
		<Redirect to="/home/add-team" />
	) : (
		<nav>
			<NavLink to="/home/add-team" activeStyle={myStyle} exact>
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

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state)
	};
}

export default connect(mapStateToProps)(Header);
