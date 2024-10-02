export const API_BASE = 'https://v2.api.noroff.dev';
export const API_AUTH = '/auth';
export const API_REGISTER = '/register';
export const API_LOGIN = '/login';
export const API_KEY = '1a094248-b961-42d2-85fe-805297c04943';
export const API_PROFILES = '/auction/profiles';
export const API_SELLER = '_seller=true';
export const API_LISTINGS = '/auction/listings';
export const API_ACTIVE = '_active=true';
export const API_SINGLE_LISTING = '/auction/listings/${ID}';
export const API_SEARCH_LISTING = '/auction/listings/search';
export const API_BIDS = '/bids';

const queryString = document.location.search;
const searchParams = new URLSearchParams(queryString);
export const seller = searchParams.get('seller');
export const title = searchParams.get('title');
export const ID = searchParams.get('id');
