import { Component } from "react";
import style from "./App.module.css";
// import Modal from "./components/ Modal/ Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

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
