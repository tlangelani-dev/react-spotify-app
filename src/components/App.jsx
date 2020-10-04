import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from '../spotify';
import Login from './Login';

const App = () => {

    const [token, setToken] = useState('');
    
    useEffect(() => {
        const _token = getTokenFromUrl();
        if (_token) {
            setToken(_token);
        }
        console.log(token);
    }, []);

    return (
        <div className="app">
            <Login />
        </div>
    )
};

export default App;
