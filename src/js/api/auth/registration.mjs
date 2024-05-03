import { API_BASE, API_AUTH, API_REGISTER } from '../constants.mjs';

//Register User
export async function register(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Could not register the account');
}
