import React, { Component } from "react";
import API from "../../services/API";
import style from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    results: [],
    error: false,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await API.fetchReviews(movieId);

      if (response.results.lenght === 0) {
        this.setState({
          massange: "No Revievs",
          error: true,
        });
      }
      this.setState({
        results: response.results.slice(0, 5),
      });
    }

  render() {
    const { results, massange, error } = this.state;
    return (
      <>
        {!error && (
          <ul className={style.list}>
            {results.map((result) => (
              <li key={result.id} className={style.item}>
                <p className={style.title}>Author: {result.author}</p>
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
