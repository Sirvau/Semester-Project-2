import { API_BASE, API_LISTINGS } from '../constants.mjs';

// Get All Listings
export async function getListings() {
  const searchParams = new URLSearchParams(window.location.search);
  const tag = searchParams.get('_tag');

  const apiURL = new URL(API_BASE + API_LISTINGS);
  apiURL.searchParams.append('_seller', true);
  apiURL.searchParams.append('_active', true);

  if (tag) {
    apiURL.searchParams.append('_tag', tag);
  }

  try {
    const response = await fetch(apiURL, {
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
