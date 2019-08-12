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

import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import AddTeamAndPlayers from "./components/AddTeamAndPlayers";
import AddResults from "./components/AddResults";

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
						<Route exact path="/sign-up" component={SignUp} />

						<div>
							<Route path="/home" component={Home} />
							<Route
								exact
								path="/home/add-team"
								component={AddTeamAndPlayers}
							/>
							<Route exact path="/home/add-results" component={AddResults} />
							{/*<Route component={PageNotFound} />*/}
						</div>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
