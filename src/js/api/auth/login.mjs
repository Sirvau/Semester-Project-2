import { save } from '../storage/save.mjs';
import { API_BASE, API_AUTH, API_LOGIN } from '../constants.mjs';

//Log in user
export async function login(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save('token', accessToken);
    save('profile', profile);
    return profile;
  }

  throw new Error('Could not login the account');
}
