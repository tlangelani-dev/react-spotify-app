import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from '../spotify';
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import User from './User';

const spotify = new SpotifyWebApi();

const App = () => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const _token = getTokenFromUrl();
        window.location.hash = '';
        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                console.log(user);
            });
        }
    }, []);

    return (
        <div className="app">
            {token ? <User /> : <Login />}
        </div>
    )
};

export default App;
