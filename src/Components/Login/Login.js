import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Navber from '../Shared/Navber/Navber';

const Login = () => {

    const { handleGoogleLogin, user, setUser, setError, setIsLoading} = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home" ; 

    const handleGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                setIsLoading(true)
                setUser(result.user)
                history.push(url)
            })
            .catch((error) => setError(error.message))
            .finally(() => {
                setIsLoading(false)
            })
    };
    return (
        <div>
            <Navber></Navber>
            {
                user?.email && <h1>Wellcome Mr. {user?.displayName}</h1>
            }
            <h2 className="text-success mt-5">Connet us with Google Sign In</h2>

            <button onClick={handleGoogle} className="btn btn-success mt-3">Login With Google</button>
        </div>
    );
};

export default Login;