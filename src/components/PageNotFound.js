import React from "react";
import { NavLink, Route, Link } from "react-router-dom";

const PageNotFound = props => (
  <div className="mt-4">
    <h1>Error 404</h1>
    <h3 className="mt-3">La página que está buscando no existe</h3>
    <h4 className="mt-5">
      <Route path="/" children={<Link to="/">Volver al inicio</Link>} />
    </h4>
  </div>
);

export default PageNotFound;
