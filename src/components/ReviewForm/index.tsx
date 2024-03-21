import { useForm } from 'react-hook-form';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/request';
import { useState } from 'react';
import { Review } from 'types/review';

type Props = {
    movieId: string;
    onInsertReview: (review:Review) => void;
}

type FormData = {
    movieId: number;
    text: string;
}


const ReviewForm = ({ movieId,onInsertReview }: Props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

    const [hasError, setHasError] = useState(false);

    const onSubmit = (formData: FormData) => {
        formData.movieId = parseInt(movieId);

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            data: formData,
            withCredentials: true
        }

        requestBackend(config).then(response => {
            setHasError(false);
            setValue('text','');
            onInsertReview(response.data);
            console.log("Sucesso ao salvar", response);
        }).catch(error => {
            setHasError(true);
            console.log("Erro ao salvar review", error);
        })
    }

    return (
        <div className="base-card container review-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <input
                        {...register('text', {
                            required: 'Campo obrigatório'
                        })}
                        type="text"
                        name="text"
                        className={`form-control base-input ${errors.text ? 'is-invalid' : ''}`}
                        placeholder="Deixe sua avaliação aqui"

                    />
                    <div className="invalid-feedback d-block">
                        {errors.text?.message}
                    </div>
                    {hasError &&
                        (<div className="alert alert-danger">
                            Erro ao tentar salvar review
                        </div>)
                    }
                </div>
                <div className="review-submit">
                    <button type="submit" className="btn btn-warning">
                        SALVAR AVALIAÇÃO
                    </button>
                </div>
            </form>
        </div>
    )
};
export default ReviewForm;