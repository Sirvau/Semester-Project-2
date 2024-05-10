import { API_BASE, API_LISTINGS } from '../constants.mjs';

// Get All Listings
export async function getListings() {
  try {
    const response = await fetch(API_BASE + API_LISTINGS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const listingData = await response.json();
      console.log(listingData);
      return await listingData;
    }
  } catch {
    throw new Error(response.statusText);
  }
}
