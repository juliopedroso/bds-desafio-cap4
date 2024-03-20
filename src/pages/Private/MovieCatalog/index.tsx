import MovieCard from "components/MovieCard";
import MovieFilter from "components/MovieFilter";
import { Link } from "react-router-dom";

const MovieCatalog = () => {
    return (
        <div className="container my-4 catalog-container">
            <div className="movie-filter-bar-container">
                <MovieFilter />
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-12">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-md-12">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-md-12">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-md-12">
                    <MovieCard />
                </div>
            </div>

        </div>
    )
}

export default MovieCatalog;