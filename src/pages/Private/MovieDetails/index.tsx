import ReviewForm from "components/ReviewForm";
import ReviewList from "components/ReviewList";

import './styles.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/request";
import { Review } from "types/review";
import { hasAnyRoles } from "util/auth";
import CardLoader from "../MovieCatalog/Cardloader";
import { Movie } from "types/movie";

type urlParams = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([])
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true
    };
    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setMovie(movie1);
        setReviews(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  }

  const movie1: Movie = {
    id: 1,
    title: 'O Retorno do Rei',
    year: 2013,
    imgUrl: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
    subTitle: "O olho do inimigo está se movendo.",
    synopsis: 'O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.',
    genreId: 1
  }

  return (
    <div className="container ">
      <div className="base-card movie-details-container">
        <div className="row">
          <div className="col-xl-6">
            <div className="movie-details-card-top-container">
              <img src={movie?.imgUrl} alt={movie?.title} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="movie-details-card-bottom-container">
              <h1>{movie?.title}</h1>
              <h2>{movie?.year}</h2>
              <h4>{movie?.subTitle}</h4>
              <div className="synopsis-container">
                <p>{movie?.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      {isLoading ? <CardLoader /> : (<ReviewList reviews={reviews} />)}
    </div>

  )
};

export default MovieDetails;