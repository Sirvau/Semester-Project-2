import { API_BASE, API_PROFILES, API_KEY } from '../constants.mjs';
import { load } from '../storage/load.mjs';

export async function getSingleProfile() {
  const profile = load('profile');

  const response = await fetch(API_BASE + API_PROFILES + `/${profile.name}`, {
    headers: {
      Authorization: `Bearer ${load('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
  });
  if (response.ok) {
    console.log(response);
    return await response.json();
  }
  console.log(response);
  throw new Error('Could not fetch single profile');
}
