import Select from 'react-select';
import './styles.css';
import { useEffect, useState } from 'react';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/request';

const MovieFilter = () => {

    const [selectGenre, setSelectGenre] = useState<Genre[]>([]);

    useEffect(() => {
        requestBackend({ url: '/genres/', withCredentials: true })
            .then((response) => {
                
                setSelectGenre(response.data);
            });
    }, [setSelectGenre]);

    return (
        <div className="base-card movie-filter-container">
            <div className="movie-filter-genre-container">


                <Select
                    options={selectGenre}
                    classNamePrefix="movie-filter-select"
                    className='movie-filter-select'
                    isClearable
                    placeholder="Gênero"

                    getOptionLabel={(genre: Genre) => genre.name}
                    getOptionValue={(genre: Genre) => String(genre.id)}
                />

            </div>
        </div >
    );
}

export default MovieFilter;