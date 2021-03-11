import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const AppBar = () => {
  return (
    <header className>
      <nav className>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
        <NavLink to={routes.movies}>Movies</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
