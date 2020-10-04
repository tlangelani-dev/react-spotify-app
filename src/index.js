import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './scss/global.scss';
import App from './components/App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

render(
    <StrictMode>
        <DataLayer initialState={initialState} reducer={reducer}>
            <App />
        </DataLayer>
    </StrictMode>,
    document.getElementById('root')
);
