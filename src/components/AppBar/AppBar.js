import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={style.bar}>
      <ul className={style.nav}>
        <li>
          <NavLink exact to={routes.home} className={style.NavLink} activeClassName={style.NavLinkActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies} className={style.NavLink} activeClassName={style.NavLinkActive}>Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
