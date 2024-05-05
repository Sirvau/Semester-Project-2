import { load } from '../storage/load.mjs';

export const isLoggedIn = () => {
  const loggedIn = load('token') ? true : false;
  console.log({ loggedIn });
  return loggedIn;
};
