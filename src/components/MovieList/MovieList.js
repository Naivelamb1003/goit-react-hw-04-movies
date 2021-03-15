import { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import style from "./MovieList.module.css";

class MoviesPage extends Component {
  render() {
    const { films } = this.props;
    return (
      <>
        <ul className={style.list}>
          {films.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: this.props.location },
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(MoviesPage);
