import { renderListingDetails } from '../listings/addBid.mjs';
import { addBidListener } from '../ui/listeners/addBid.mjs';

export async function addBidPage() {
  renderListingDetails();
  addBidListener();
}

addBidPage();
