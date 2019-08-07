import React from "react";

class LogIn extends React.Component {
  //navigateToTodolist = () => this.props.history.push("/todolist");

  render() {
    return (
      <>
        <h2>Inicio de Sesión</h2>
        <div className="row mt-1">
          <div className="col">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
            />
          </div>
        </div>
        <button
          className="btn btn-block btn-primary mt-1"
          onClick={this.navigateToTodolist}
        >
          Log In
        </button>
      </>
    );
  }
}

export default LogIn;
