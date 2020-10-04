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

const getTokenFromUrl = () => {
    if (window.location.hash === '') {
        return null;
    }

    let hash = window.location.hash;
    hash = hash.substring(1);
    hash = hash.split('&');
    hash = hash[0];
    return hash.substring(13);

    // return window.location.hash
    //     .substring(1)
    //     .split('&')
    //     .reduce((initial, item) => {
    //         let parts = item.split('=');
    //         initial[parts[0]] = decodeURIComponent(parts[1]);
    //         return initial;
    //     }, {});
};

export {
    authEndpoint,
    loginUrl,
    getTokenFromUrl
};
