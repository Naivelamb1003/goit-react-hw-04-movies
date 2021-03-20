import React, { Component } from "react";

import { toast } from "react-toastify";
import queryString from "query-string";

import api from "../../services/API";
import Searchbar from "../../components/Searchbar/Searchbar";
import MovieList from "../../components/MovieList/MovieList";

class MoviesPage extends Component {
  state = {
    results: [],
    search: "",
    error: false,
  };

  componentDidMount() {
    const { search } = queryString.parse(this.props.location.search);

    if (search) {
      console.log("Есть квери, можно фечить");
      this.fetcMoviesSearch(search);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { search: prevSearch } = queryString.parse(prevProps.location.search);
    const { search: nextSearch } = queryString.parse(
      this.props.location.search
    );
    console.log(prevSearch);
    console.log(nextSearch);

    if (prevSearch !== nextSearch) {
      await this.fetcMoviesSearch(nextSearch);
    }
  }

  async fetcMoviesSearch(search) {
    try {
      const data = await api.fetchSearch(search);
      console.log(data);
      console.log(data.results);
      if (data.total_results === 0) {
        toast.error(`No results were found for ${search}`);
      }
      this.setState({ results: data.results });
    } catch (error) {
      console.log(error);
    }
  }

  addSearch = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `search=${query}`,
    });
  };

  render() {
    const { results } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.addSearch} />
        {results && <MovieList films={results} />}
      </>
    );
  }
}

export default MoviesPage;
