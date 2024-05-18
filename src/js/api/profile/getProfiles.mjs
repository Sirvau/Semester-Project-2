import { API_BASE, API_PROFILES, API_KEY } from '../constants.mjs';
import { load } from '../storage/load.mjs';
import { showLoader, hideLoader } from '../ui/loader/loader.mjs';

export async function getSingleProfile() {
  try {
    showLoader();
    const profile = load('profile');

    const response = await fetch(API_BASE + API_PROFILES + `/${profile.name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${load('token')}`,
        'X-Noroff-API-Key': API_KEY,
      },
    });
    if (response.ok) {
      const profileData = await response.json();
      hideLoader();
      return await profileData;
    }
  } catch (error) {
    console.log(response);
    throw new Error(response.statusText, 'Could not fetch single profile');
  }
}
