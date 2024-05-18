import { createListing } from '../../listings/createListing.mjs';

export function createListingListener() {
  const navForm = document.querySelector('form#nav-create-listing-form');
  const profileForm = document.querySelector('form#create-listing-form');

  try {
    if (navForm) {
      navForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const navForm = event.target;
        const formData = new FormData(navForm);

        const mediaUrls = [];
        const mediaFields = ['listing-url', 'listing-url-2', 'listing-url-3'];
        mediaFields.forEach((field) => {
          const url = formData.get(field);
          if (url) mediaUrls.push({ url });
        });

        const listing = {
          title: formData.get('listing-title'),
          description: formData.get('listing-description'),
          tags: formData.get('listing-tags').split(','),
          media: mediaUrls,
          endsAt: formData.get('listing-date'),
        };
        console.log(listing);
        try {
          await createListing(listing);
          window.location.pathname = '/listed-items/';
        } catch (error) {
          console.log('Error creating new listing:', error);
        }
      });
    }
    if (profileForm) {
      profileForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const profileForm = event.target;
        const formData = new FormData(profileForm);

        const mediaUrls = [];
        const mediaFields = ['listing-url', 'listing-url-2', 'listing-url-3'];
        mediaFields.forEach((field) => {
          const url = formData.get(field);
          if (url) mediaUrls.push({ url });
        });

        const listing = {
          title: formData.get('listing-title'),
          description: formData.get('listing-description'),
          tags: formData.get('listing-tags').split(','),
          media: mediaUrls,
          endsAt: formData.get('listing-date'),
        };
        console.log(listing);
        try {
          await createListing(listing);
          window.location.pathname = '/listed-items/';
        } catch (error) {
          console.log('Error creating new listing:', error);
        }
      });
    }
  } catch (error) {
    console.log('Error adding submit listener:', error);
  }
}
