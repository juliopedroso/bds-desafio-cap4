import { Movie } from "types/movie";

import './styles.css';

const MovieCard = () => {

    const movie: Movie =  {
        id: 9,
        title: "O Retorno do rei",
        subTitle: "O olho do inimigo está se movendo.",
        year: 2013,
        imgUrl: "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
        synopsis: "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
        genreId: 2
    }

    return (
        <div className="base-card movie-card">
            <div className="card-top-container">
                <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="card-bottom-container">
                <h6>{movie.title}</h6>
                <h6>{movie.year}</h6>
                <span>{movie.subTitle}</span>

            </div>
        </div>
    );
}

export default MovieCard;