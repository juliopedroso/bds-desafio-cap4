import MovieCard from "components/MovieCard";
import { Link } from "react-router-dom";

const MovieCatalog = () => {
    return (
        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Tela listagem de filmes</h1>
            </div>

            <MovieCard/>
            <MovieCard/>
            <MovieCard/>


            <div className="row my-4">

                <Link className="text-white" to="/movies/1">
                    Acessar /movies/1
                </Link>
            </div>
            <div className="row">

                <Link className="text-white" to="/movies/2">
                    Acessar /movies/2
                </Link>
            </div>
        </div>
    )
}

export default MovieCatalog;