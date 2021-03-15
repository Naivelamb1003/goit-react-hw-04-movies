import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundViews from "./views/NotFoundViews";
import routes from "./components/routes";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));


const App = () => (
  <>
    <AppBar />
    <Suspense fallback = {<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.details} component={MovieDetailsPage} />
        <Route path={routes.cast} component={Cast} />
        <Route path={routes.reviews} component={Reviews} />
        <Route component={NotFoundViews} />
      </Switch>
    </Suspense>
  </>
);

export default App;
