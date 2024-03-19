
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path='/movies'>
                <Route path="/movies" exact>
                    <MovieCatalog />
                </Route>
                <Route path="/movies/:movieId" >
                    <MovieDetails />
                </Route>
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
);

export default Routes;
