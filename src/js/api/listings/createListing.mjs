import { API_BASE, API_KEY, API_LISTINGS } from '../constants.mjs';
import { load } from '../storage/load.mjs';

//Create Listing

export async function createListing(listingData) {
  const token = load('token');
  const response = await fetch(API_BASE + API_LISTINGS, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'POST',
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Could not add new listing');
}
