import React, { Component } from "react";
import API from "../../services/API";
import s from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    results: [],
    error: false,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await API.fetchReviews(movieId);
    const json = await response.json();
    console.log(json);
      if (json.results.lenght === 0) {
        this.setState({
          massange: "No Revievs",
          error: true,
        });
      }
      this.setState({
        results: json.results.slice(0, 5),
      });
    }

  render() {
    const { results, massange, error } = this.state;
    return (
      <>
        {!error && (
          <ul className={s.list}>
            {results.map((result) => (
              <li key={result.id} className={s.item}>
                <p className={s.title}>Author: {result.author}</p>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        )}
        {error && <p>{massange}</p>}
      </>
    );
  }
}

export default Reviews;
