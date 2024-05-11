import { API_BASE, API_PROFILES, API_KEY } from '../constants.mjs';
import { load } from '../storage/load.mjs';

export async function editAvatar() {
  const profile = load('profile');

  const response = await fetch(API_BASE + API_PROFILES + `/${profile.name}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${load('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'PUT',
    body: JSON.stringify(profile),
  });
  if (response.ok) {
    console.log('This response was a success');
    return await response.json();
  }
  console.log(response);
  throw new Error('Could not edit avatar');
}
