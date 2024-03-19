import { useContext, useEffect } from 'react';
import './styles.css';
import { AuthContext } from 'AuthContext';
import { useHistory } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';

const Navbar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: isAuthenticated(),
                tokenData: getTokenData()
            })
        }
        else {
            setAuthContextData({
                authenticated: false
            })
        }
    }, [setAuthContextData]);

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
            <div className="container-fluid">
                <div className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </div>
                {authContextData.authenticated ? (
                    <div className='btn nav-logout'>
                        <a href='#logout' onClick={handleLogoutClick}>
                            SAIR
                        </a>
                    </div>
                ) : (
                    <div />
                )
                }
            </div>
        </nav>
    );
}

export default Navbar;


