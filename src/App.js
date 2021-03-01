import { Component } from "react";
import style from "./App.module.css";
import  { Route, Switch } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import NotFoundViews from "./views/NotFoundViews";


const App =() =>(
  <>
  <Switch>

    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MovieDetailsPage} />
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={Reviews} />
    <Route  component={NotFoundViews} />
  </Switch>
    
  </>
)

export default App;
