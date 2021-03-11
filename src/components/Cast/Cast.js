import React, { Component } from "react";
import API from "../../services/API";

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await API.fetchСredits(movieId);
    const json = await response.json();
    
    this.setState({
      cast: json.cast.slice(0, 5),
    });
  }

  render() {
      const {cast} = this.state;
    return (
    <>
        <h1>Актерский состав</h1>
        {cast && cast.map(actor => (<h4>{actor.name}</h4>))}
    </>)
  }
}

export default Cast;
