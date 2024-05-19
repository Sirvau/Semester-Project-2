import { getListings } from './getListings.mjs';
import { isLoggedIn } from '../auth/loginState.mjs';
import { showLoader, hideLoader } from '../ui/loader/loader.mjs';

export function recentListingsTemplate(listingData) {
  const { id, title, media, endsAt } = listingData;

  const listingFeedContainer = document.querySelector(
    '#recent-listings-main-container',
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

  //Car Info Container

  const cardInfoContainer = document.createElement('div');
  cardInfoContainer.classList.add('container');

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

  // Card Ends At Date
  const endsAtDate = document.createElement('small');
  endsAtDate.textContent = `${new Date(endsAt).toLocaleString()}`;

  cardInfoContainer.appendChild(listingTitle);
  cardInfoContainer.appendChild(endsAtDate);
  listingCardContainer.appendChild(cardInfoContainer);

  listingFeedContainer.appendChild(listingCardLink);

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
      'text-formatting',
      'rounded-top-0',
    );
    bidLink.textContent = `Bid`;
    bidLink.href = `/add-bid/?id=${listingData.id}`;
    cardInfoContainer.appendChild(bidLink);
  }

  return listingCardLink;
}

export async function renderRecentListingsTemplate(listingData) {
  listingData.forEach((listing) => {
    const listingElement = recentListingsTemplate(listing);
    return listingElement;
  });
}

export async function displayRecentListings() {
  try {
    showLoader();
    const listings = await getListings();
    const sortedListings = listings.data.sort(
      (a, b) => new Date(b.created) - new Date(a.created),
    );
    const recentListings = sortedListings.slice(0, 6);

    const container = document.querySelector('#listing-card-container');
    await renderRecentListingsTemplate(recentListings, container);
    hideLoader();
  } catch (error) {
    console.error('Error displaying recent listings', error);
  }
}
