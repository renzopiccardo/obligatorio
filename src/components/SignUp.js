import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class SignUp extends React.Component {
  //navigateToTodolist = () => this.props.history.push("/todolist");

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      email: ""
    };

    handleChange = event => {
      this.setState({name});
      event.target.value = name.value;
    };
  }

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return this.state.isLogged ? <Redirect to="/" />
      : <div>
        <form>
          <div className="row mt-1">
            <div className="col">
              <label>Nombre</label>
              <input type="text" name='name' value={name} className="form-control" required autofocus/>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col">
              <label>Email</label>
              <input type="email" name='email' value={email} className="form-control" required/>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col">
              <label>Contraseña</label>
              <input type="password" name='password' value={password} className="form-control" required/>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col">
              <label>Repetir contraseña</label>
              <input type="password" name='confirmPassword' value={confirmPassword} className="form-control" required/>
            </div>
          </div>
        </form>
      </div>

  }
}

export default SignUp;
