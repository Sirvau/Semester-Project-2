import { load } from '../storage/load.mjs';

export const isLoggedIn = () => (load('token') ? true : false);
