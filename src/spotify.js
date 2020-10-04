/**
 * https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
 */
const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '8e852561d6914715941fc18317266190';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];


const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('&20')}&response_type=token&show_dialog=true`;

const getTokenFromResponse = () => {
    return window.location.hash;
};

export {
    authEndpoint,
    loginUrl,
    getTokenFromResponse
};
