import React, { Component } from "react";
import API from "../../services/API";
import MovieList from "../../views/MovieList/MovieList";

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
        <MovieList films = {this.state.films} />
      </>
    );
  }
}

export default HomePage;
