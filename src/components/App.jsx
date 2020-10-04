import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from '../spotify';
import Login from './Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from '../DataLayer';

const spotify = new SpotifyWebApi();

const App = () => {

    const [{user, token}, dispatch] = useDataLayerValue();
    
    useEffect(() => {
        const _token = getTokenFromUrl();
        window.location.hash = '';
        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            });
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            });
        }
    }, []);

    console.log('user', user);
    console.log('token', token);

    return (
        <div className="app">
            {token ? <Player /> : <Login />}
        </div>
    )
};

export default App;
