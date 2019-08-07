import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  const myStyle = { color: "#F02222" };

  return (
    <nav>
      <NavLink to="/" activeStyle={myStyle} exact>
        {" "}
        Log In{" "}
      </NavLink>
      {" | "}
      <NavLink to="/todolist" activeStyle={myStyle}>
        {" "}
        ToDo List{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
