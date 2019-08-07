import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = props => (
  <>
    <h1>Error 404!</h1>
    <button>Volver al Inicio</button>
    <NavLink to="/" />
  </>
);

export default PageNotFound;
