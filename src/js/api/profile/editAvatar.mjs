import { API_BASE, API_PROFILES, API_KEY } from '../constants.mjs';
import { load } from '../storage/load.mjs';

export async function editAvatar(avatarData) {
  const profile = load('profile');
  const editAvatarUrl = `${API_BASE}${API_PROFILES}/${profile.name}`;

  try {
    const editAvatar = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${load('token')}`,
        'X-Noroff-API-Key': API_KEY,
      },
      body: JSON.stringify(avatarData),
    };

    const response = await fetch(editAvatarUrl, editAvatar);
    const result = await response.json();

    if (response.ok) {
      console.log(avatarData);
      return await result;
    }
  } catch (error) {
    console.error('Could not edit avatar', error);
    throw error;
  }
}
