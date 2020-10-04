import React from 'react';
import { loginUrl } from '../spotify';

const Login = () => {
    console.log(loginUrl);
    return (
        <div className="login">
            <img src="/img/spotify-logo.png" alt="Spotify" />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login;
