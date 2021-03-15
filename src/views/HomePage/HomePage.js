import React, { Component } from "react";
import API from "../../services/API";
import MovieList from "../../components/MovieList/MovieList";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
      const response = await API.fetchTrending();
      this.setState({ films: response.results });
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
