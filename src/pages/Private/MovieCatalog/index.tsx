import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import MovieFilter from "components/MovieFilter";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from "util/request";

const MovieCatalog = () => {

    const [page, setPage] = useState<SpringPage<Movie>>();
    useEffect(() => {
        getMovies(0);
    }, []);

    const getMovies = (pageNumber: number) => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/movies",
            params: {
                page: pageNumber,
                size: 2,
            },
            withCredentials: true
        };

        requestBackend(params)
            .then((response) => {
                setPage(response.data);
            });
    }
    const handlePageChange = (pageNumber: number) => {
        getMovies(pageNumber)
    }

    return (
        <div className="container my-4">
            <div className="movie-filter-bar-container">
                <MovieFilter />
            </div>
            <div className="row">
                {
                    page?.content.map(movie => (
                        <div className="col-sm-6 col-xl-3" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <MovieCard movie={movie} ></MovieCard>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <Pagination
                forcePage={page?.number}
                pageCount={(page) ? page?.totalPages : 0}
                range={3}
                onChange={handlePageChange}
            />
        </div>
    )
}

export default MovieCatalog;