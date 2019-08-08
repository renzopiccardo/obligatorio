///import React, { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
//import * as taskActions from './redux/actions/taskActions';
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
import AddTeamAndPlayers from "./components/AddTeamAndPlayers";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="container mt-3">
        <Header />
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/add-team" component={AddTeamAndPlayers} />
          <Route path="/sign-up" component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
