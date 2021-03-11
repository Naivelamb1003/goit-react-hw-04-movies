import API from "../../services/API";
import React, { Component } from "react";
import style from "./MoviesDetailsPage.module.css";
import { NavLink, Route } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import routes from "../routes";

class MoviesDetailsPage extends Component {
  state = {
    posterPath: null,
    title: null,
    overview: null,
    userScore: null,
    genres: null,
    date: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await API.fetchMovieId(movieId);
    const json = await response.json();
    this.setState({
      posterPath: json.poster_path,
      title: json.title,
      overview: json.overview,
      userScore: json.vote_average,
      genres: json.genres,
      date: json.release_date,
    });
  }

  goBack = () => {
    if(this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    return this.props.history.push(routes.home);
    
  };

  render() {
    const { posterPath, title, overview, userScore, genres } = this.state;
    const { path, url } = this.props.match;
    const movieId = Number(this.props.match.params.movieId);
    const postURL = `https://image.tmdb.org/t/p/w400${posterPath}`;

    return (
      <>
        <button onClick={this.goBack} className={style.btn}>Go back</button>

        <div className={style.container}>
          <div className={style.imgConainer}>
            <img src={postURL} alt={title} />
          </div>
          <div className={style.infocontainer}>
            <h2>{title}</h2>
            <p className={style.text}>User score: {userScore * 10}%</p>
            <h3>Overview</h3>
            <p className={style.text}>{overview}</p>
            <h3>Genres</h3>
            {genres &&
              genres.map((genre) => (
                <p className={style.textGenre} key={genre.id}>
                  {genre.name}
                </p>
              ))}
          </div>
        </div>

        <NavLink to={`${url}/cast`} className={style.NavLink} activeClassName={style.NavLinkActive}>Актерский состав</NavLink>
        <NavLink to={`${url}/reviews` } className={style.NavLink} activeClassName={style.NavLinkActive}>Доп информация</NavLink>

        <Route
          path={`${path}/cast`}
          render={() => {
            return <Cast movieId={movieId} />;
          }}
        />

        <Route
          path={`${path}/reviews`}
          render={() => {
            return <Reviews movieId={movieId} />;
          }}
        />
      </>
    );
  }
}

export default MoviesDetailsPage;
