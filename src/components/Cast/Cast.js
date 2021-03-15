import React, { Component } from "react";
import API from "../../services/API";
import style from './Cast.module.css';


class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await API.fetchСredits(movieId);

    this.setState({
      cast: response.cast.slice(0, 5),
    });
  }

  render() {
    const { cast } = this.state;
    const profile_url = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
    const no_avatar_url = "https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png";
    console.log(cast);
    return (
      <>
      <h1>Актерский состав</h1>
      <ul className={style.list}>
        
        {cast &&
          cast.map((actor) => (
            <li className={style.item}>
              <img src={actor.profile_path ? profile_url + actor.profile_path : no_avatar_url} alt="face" className={style.img} />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
      </>
    );
  }
}

export default Cast;
