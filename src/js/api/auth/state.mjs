//Checks if theres a token. If there is, user is logged in.

export const isLoggedIn = () => (load('token') ? true : false);
