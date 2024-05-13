import { API_BASE, API_KEY, API_LISTINGS } from '../constants.mjs';
import { load } from '../storage/load.mjs';

//Create Listing

export async function createListing(listingData) {
  try {
    const token = load('token');
    const response = await fetch(API_BASE + API_LISTINGS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': API_KEY,
      },
      body: JSON.stringify(listingData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to create listing');
    }
  } catch (error) {
    console.error('Error creating new listing:', error);
    throw error;
  }
}
