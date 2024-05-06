import { createListing } from '../../listings/createListing.mjs';

export function createListingListener() {
  const form = document.querySelector('#create-listing-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = {
        title: formData.get('listing-title'),
        description: formData.get('listing-description'),
        tags: formData.get('listing-tags').split(','),
        media: [{ url: formData.get('listing-url') }],
        endsAt: formData.get('listing-date'),
      };
      console.log(listing);
      createListing(listing);
    });
  }
}
