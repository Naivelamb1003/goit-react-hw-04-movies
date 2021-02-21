import { Component } from "react";
import style from "./App.module.css";
import  {Router } from 'react-router-dom';


class App extends Component {
  state = {
    searchQuery: "",
  };

  onSubmit = (searchQueryState) => {
    this.setState({
      searchQuery: searchQueryState.searchQuery,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}

export default App;
