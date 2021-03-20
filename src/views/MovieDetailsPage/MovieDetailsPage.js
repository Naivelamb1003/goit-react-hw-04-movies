import API from "../../services/API";
import React, { Component } from "react";
import style from "./MoviesDetailsPage.module.css";
import { NavLink, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import routes from "../../components/routes";

const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

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

    try {
      const response = await API.fetchMovieId(movieId);
      this.setState({
        posterPath: response.poster_path,
        title: response.title,
        overview: response.overview,
        userScore: response.vote_average,
        genres: response.genres,
        date: response.release_date,
      });
    } catch (error) {
      console.log(error);
    }
  }

  goBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    return this.props.history.push(routes.home);
  };

  render() {
    const { posterPath, title, overview, userScore, genres } = this.state;
    const { path, url } = this.props.match;
    const movieId = Number(this.props.match.params.movieId);
    const postURL = `https://image.tmdb.org/t/p/w400${posterPath}`;
    const fromUrl = this.props.location.state
      ? this.props.location.state.from
      : routes.home;

    return (
      <>
        <button onClick={this.goBack} className={style.btn}>
          Go back
        </button>

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

        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: fromUrl },
          }}
          className={style.NavLink}
          activeClassName={style.NavLinkActive}
        >
          Актерский состав
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: fromUrl },
          }}
          className={style.NavLink}
          activeClassName={style.NavLinkActive}
        >
          Доп информация
        </NavLink>

        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>
      </>
    );
  }
}

export default MoviesDetailsPage;
