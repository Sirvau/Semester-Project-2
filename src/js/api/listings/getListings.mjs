import { API_BASE, API_LISTINGS, API_SINGLE_LISTING } from '../constants.mjs';

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

//Get Single Listing By ID
export async function getSingleListing(id) {
  try {
    const response = await fetch(API_BASE + API_SINGLE_LISTING, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const singleListingData = await response.json();
      console.log(singleListingData);
      return await singleListingData;
    }
  } catch {
    if (!id) {
      throw new Error('Get requires a postID');
    }
  }
}
