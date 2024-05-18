import { API_BASE, API_SEARCH_LISTING } from '../constants.mjs';

export async function searchListing(value) {
  try {
    let searchURL = new URL(API_BASE + API_SEARCH_LISTING);

    searchURL.searchParams.append('q', value);

    console.log(searchURL);

    const response = await fetch(searchURL);
    const result = response.json();

    if (response.ok) {
      return await result;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
