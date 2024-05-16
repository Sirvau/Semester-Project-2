import {
  API_BASE,
  API_KEY,
  API_LISTINGS,
  ID,
  API_BIDS,
} from '../constants.mjs';
import { getListingById } from './specificListing.mjs';

import { load } from '../storage/load.mjs';

//Add Bid

export async function addBidToListing(id, bidData) {
  try {
    const token = load('token');
    const response = await fetch(
      API_BASE + API_LISTINGS + '/' + id + API_BIDS,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_KEY,
        },
        body: JSON.stringify(bidData),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to add bid');
    }
  } catch (error) {
    console.error('Error adding new bid:', error);
    throw error;
  }
}

export async function renderListingDetails() {
  const listingData = await getListingById(ID);

  const listingTitle = document.getElementById('title-listed-item');
  listingTitle.textContent = listingData.data.title;

  const listingImg = document.getElementById('listing-bid-img');
  listingImg.src = listingData.data.media[0].url;
  listingImg.alt = listingData.data.media[0].alt;

  const currentBid = document.getElementById('current-bid');
  const sortedBids = listingData.data.bids.sort((a, b) => {
    return b.amount - a.amount;
  });
  currentBid.textContent = sortedBids[0].amount + `$`;
  console.log(sortedBids);
}
