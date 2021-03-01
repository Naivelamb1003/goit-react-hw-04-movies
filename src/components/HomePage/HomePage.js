import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../services/API";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    try {
      const response = await API.fetchTrending();
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ films: json.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <h1>Начальная страница</h1>
        <ul>
          {this.state.films.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
