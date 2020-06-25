export const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('auth_token'));
}

export const checkIsAuthorized = () => {
    return localStorage.getItem('auth_token') !== null;
}