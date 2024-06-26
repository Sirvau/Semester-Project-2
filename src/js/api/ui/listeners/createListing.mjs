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

// Create Listing Form validation
export function validateCreateListingNavForm() {
  let titleInput = document.getElementById('listing-title');
  let dateInput = document.getElementById('date');

  titleInput.addEventListener('change', (event) => {
    let titleInput = event.target;
    let valid = titleInput.checkValidity();
    if (!valid) {
      titleInput.classList.remove('is-valid');
      titleInput.classList.add('is-invalid');
    } else {
      titleInput.classList.remove('is-invalid');
      titleInput.classList.add('is-valid');
    }
  });

  dateInput.addEventListener('change', (event) => {
    let dateInput = event.target;
    let valid = dateInput.checkValidity();
    if (!valid) {
      dateInput.classList.remove('is-valid');
      dateInput.classList.add('is-invalid');
    } else {
      dateInput.classList.remove('is-invalid');
      dateInput.classList.add('is-valid');
    }
  });
}

export function validateCreateListingProfileForm() {
  let titleInputBottomForm = document.getElementById(
    'listing-title-bottom-form',
  );
  let dateInputBottomForm = document.getElementById('date-bottom-form');

  titleInputBottomForm.addEventListener('change', (event) => {
    let titleInputBottomForm = event.target;
    let valid = titleInputBottomForm.checkValidity();
    if (!valid) {
      titleInputBottomForm.classList.remove('is-valid');
      titleInputBottomForm.classList.add('is-invalid');
    } else {
      titleInputBottomForm.classList.remove('is-invalid');
      titleInputBottomForm.classList.add('is-valid');
    }
  });

  dateInputBottomForm.addEventListener('change', (event) => {
    let dateInputBottomForm = event.target;
    let valid = dateInputBottomForm.checkValidity();
    if (!valid) {
      dateInputBottomForm.classList.remove('is-valid');
      dateInputBottomForm.classList.add('is-invalid');
    } else {
      dateInputBottomForm.classList.remove('is-invalid');
      dateInputBottomForm.classList.add('is-valid');
    }
  });
}
