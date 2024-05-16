import { getListings } from '../listings/getListings.mjs';
import { isLoggedIn } from '../auth/loginState.mjs';

export function listingCardTemplate(listingData) {
  const { id, title, media, endsAt } = listingData;

  const listingFeedContainer = document.querySelector(
    '#listing-card-container',
  );

  const listingCardContainer = document.createElement('div');
  listingCardContainer.classList.add('mb-5', 'mt-1');

  // Link to specific item
  const listingCardLink = document.createElement('a');
  listingCardLink.href = `/specific-listing/?id=${id}`;
  listingCardLink.classList.add(
    'btn',
    'my-3',
    'py-2',
    'card',
    'bg-primary',
    'col-sm-8',
    'col-md-5',
    'col-xl-3',
    'mx-1',
    'border',
    'listingCard',
  );

  listingCardLink.appendChild(listingCardContainer);

  // Card Image
  if (media && media.length > 0) {
    const listingImg = document.createElement('img');
    listingImg.src = media[0].url;
    listingImg.setAttribute('alt', media[0].alt);
    listingImg.classList.add('img-fluid', 'card-img-top', 'listingCardImg');
    listingCardContainer.appendChild(listingImg);
  } else {
    // Default Image
    const defaultImg = document.createElement('img');
    defaultImg.src =
      'https://images.unsplash.com/photo-1529511696370-b8554caa7261?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    defaultImg.setAttribute('alt', 'Default Image');
    defaultImg.classList.add('img-fluid', 'card-img-top', 'listingCardImg');
    listingCardContainer.appendChild(defaultImg);
  }

  // Card Title
  const listingTitle = document.createElement('h2');
  listingTitle.textContent = title;
  listingTitle.classList.add(
    'item-title',
    'main-header',
    'text-formatting',
    'h5',
    'mt-4',
  );
  listingCardContainer.appendChild(listingTitle);

  // Card Ends At Date
  const endsAtDate = document.createElement('small');
  endsAtDate.textContent = `${new Date(endsAt).toLocaleString()}`;
  listingCardContainer.appendChild(endsAtDate);

  // Bid Link
  if (isLoggedIn()) {
    const bidLink = document.createElement('a');
    bidLink.classList.add(
      'btn',
      'bg-tertiary',
      'toggleHideElement',
      'd-block',
      'mx-1',
      'mt-5',
      'mb-1',
    );
    bidLink.textContent = `Bid`;
    bidLink.href = `/add-bid/?id=${listingData.id}`;
    listingCardContainer.appendChild(bidLink);
  }
  // Appending card to container
  listingFeedContainer.appendChild(listingCardLink);

  return listingCardLink;
}

export async function renderListingCardTemplate(listingData, parent) {
  listingData.forEach((listing) => {
    const listingElement = listingCardTemplate(listing);
    parent.appendChild(listingElement);
  });
}

export async function displayAllListings() {
  const listings = await getListings();
  const container = document.querySelector('#listing-card-container');
  await renderListingCardTemplate(listings.data, container);
}

// export async function displayRecentListings() {
//   const recentListings = await getListings();
//   const container = document.querySelector('#recent-listings-main-container');
//   await renderListingCardTemplate(listings.data, container);
// }
