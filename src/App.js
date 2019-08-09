///import React, { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	PrivateRoute,
	Redirect,
	withRouter
} from "react-router-dom";
//import * as taskActions from './redux/actions/taskActions';
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import AddTeamAndPlayers from "./components/AddTeamAndPlayers";

class App extends React.Component {
	// constructor(props) {
	//   super(props);
	// }

	render() {
		return (
			<div className="container mt-3">
				{/*<Header />*/}
				<Router>
					<Switch>
						<Route exact path="/" component={LogIn} />
						<Route path="/add-team" component={AddTeamAndPlayers} />
						<Route path="/sign-up" component={SignUp} />
						<Route path="/home" component={Home} />
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
