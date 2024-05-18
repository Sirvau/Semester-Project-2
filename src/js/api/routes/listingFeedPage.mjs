import { displayAllListings } from '../listings/listingCardTemplate.mjs';
import { createSearchListener } from '../ui/listeners/search.mjs';
import { pagination } from '../listings/listingCardTemplate.mjs';
import { loadListings } from '../listings/listingCardTemplate.mjs';

export function listingFeedPage() {
  displayAllListings();
  createSearchListener();
  pagination();
  loadListings(pageNumber);
}

listingFeedPage();
