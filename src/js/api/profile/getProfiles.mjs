import { API_BASE, API_PROFILES, API_KEY } from '../constants.mjs';
import { load } from '../storage/load.mjs';

//Fetch profiles from API
export async function getProfiles() {
  const response = await fetch(API_BASE + API_PROFILES, {
    headers: {
      Authorization: `Bearer ${load('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
  });
  if (response.ok) {
    console.log(response);
    return await response.json();
  }
  console.log(Error);
  throw new Error('Could not fetch profiles from API');
}
