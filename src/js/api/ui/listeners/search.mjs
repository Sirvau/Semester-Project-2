import { searchListing } from '../../listings/searchListings.mjs';
import { renderListingCardTemplate } from '../../listings/listingCardTemplate.mjs';

export function createSearchListener() {
  try {
    const searchForm = document.getElementById('search-form');
    const listingContainer = document.getElementById('listing-card-container');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(searchForm);
      const search = formData.get('search');
      const listingsResult = await searchListing(search);
      listingContainer.innerHTML = ``;
      await renderListingCardTemplate(listingsResult.data, listingContainer);
    });
  } catch (error) {
    console.log('Error adding search listener:', error);
  }
}
