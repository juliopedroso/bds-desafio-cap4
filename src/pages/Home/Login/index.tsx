import { useForm } from 'react-hook-form';
import './styles.css';
import { requestBackendLogin } from 'util/request';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';
import { getTokenData, isAuthenticated } from 'util/auth';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data);
                setHasError(false);
                setAuthContextData({
                    authenticated: isAuthenticated(),
                    tokenData: getTokenData()
                });
                history.push('/movies')
            })
            .catch(error => {
                setHasError(true);
                console.log('error', error);
                history.push('/')
            })
    };

    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            {hasError &&
                (<div className="alert alert-danger">
                    Erro ao tentar efetuar o login
                </div>)
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input
                        {...register('username', {
                            required: 'Campo obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email inválido'
                            }
                        })}
                        type="text"
                        className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                    />
                    <div className="invalid-feedback d-block">{errors.username?.message}</div>
                </div>
                <div className="mb-4">
                    <input
                        {...register('password', {
                            required: 'Campo obrigatório'
                        })}
                        type="password"
                        className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        name="password"
                    />
                    <div className="invalid-feedback d-block">{errors.password?.message}</div>
                </div>
                <div className="login-submit">
                    <button type="submit" className="btn btn-warning">
                        <h6>Fazer login</h6>
                    </button>

                </div>
            </form>
        </div>
    );
}

export default Login;