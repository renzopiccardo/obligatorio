import React, { Component } from "react";
import { connect } from "react-redux";
import { isUserLogged } from "./../selectors/userSelectors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	PrivateRoute,
	Redirect,
	withRouter
} from "react-router-dom";
import PageNotFound from "./../components/PageNotFound";
import LogOut from "./../components/LogOut";
import AddTeamAndPlayers from "./../components/AddTeamAndPlayers";
//import { signup } from "./../redux/actions/userActions";
//import { signUpUser } from "./../services";

class Home extends React.Component {
	/*
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      email: ""
    };
  }
*/

	render() {
		//const { name, email, password, confirmPassword } = this.state;

		return !this.props.isUserLogged ? (
			<Redirect to="/" />
		) : (
			<div>
				<div className="mt-4">
					<div className="row mt-2">
						<div className="col-4">
							<LogOut />
						</div>
					</div>
				</div>
				<Router>
					<Switch>
						<Route path="/add-team" component={AddTeamAndPlayers} />
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isUserLogged: isUserLogged(state)
	};
}
/*
const mapDispatchToProps = dispatch => {
  return {
    signup: team => {
      dispatch(signup(team));
    }
  };
};
*/
export default connect(mapStateToProps)(Home);
