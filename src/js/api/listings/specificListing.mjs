import { API_BASE, API_LISTINGS, ID } from '../constants.mjs';

export async function getListingById(id) {
  try {
    const listingSpecificURL = `${API_BASE}${API_LISTINGS}/${id}?_bids=true`;
    const response = await fetch(listingSpecificURL);
    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error('Failed to fetch listing');
    }

    const singleListing = await response.json();
    console.log('Fetched listing data:', singleListing);
    return singleListing;
  } catch (error) {
    console.error('Error fetching listing:', error);
  }
}

//---------------------------------------------------Function for displaying Specific Listing ---------------------------------------

export async function displaySpecificListing() {
  if (!ID) {
    throw new Error('Post ID is missing');
  }
  try {
    const singleListing = await getListingById(ID);

    const singlePostMainContainer = document.getElementById(
      'single-listing-main-container',
    );

    // Image Gallery - Top image
    const listingGalleryContainer = document.getElementById(
      'listing-gallery-container',
    );

    const topImageContainer = document.createElement('div');
    topImageContainer.classList.add('container');

    if (singleListing.data.media && singleListing.data.media.length > 0) {
      const firstMediaItem = singleListing.data.media[0];
      const topImageLink = document.createElement('a');
      topImageLink.href = '#';
      topImageLink.classList.add('d-block', 'mb-4');

      const topListingImg = document.createElement('img');
      topListingImg.src = firstMediaItem.url;
      topListingImg.setAttribute('alt', firstMediaItem.alt);
      topListingImg.classList.add('img-fluid');
      topImageLink.appendChild(topListingImg);
      topImageContainer.appendChild(topImageLink);
    } else {
      // Default img
      const defaultImage = document.createElement('img');
      defaultImage.src =
        'https://images.unsplash.com/photo-1529511696370-b8554caa7261?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      defaultImage.setAttribute('alt', 'Default Image');
      defaultImage.classList.add('img-fluid');
      topImageContainer.appendChild(defaultImage);
    }

    listingGalleryContainer.appendChild(topImageContainer);

    // Image Gallery - Additional images
    const additionalImagesContainer = document.createElement('div');
    additionalImagesContainer.classList.add(
      'd-flex',
      'justify-content-between',
    );

    for (let i = 1; i < singleListing.data.media.length; i++) {
      const mediaItem = singleListing.data.media[i];

      const imageLink = document.createElement('a');
      imageLink.href = '#';
      imageLink.classList.add('d-block', 'mb-4', 'mx-1');

      const listingImg = document.createElement('img');
      listingImg.src = mediaItem.url;
      listingImg.setAttribute('alt', mediaItem.alt);
      listingImg.classList.add('img-fluid', 'img-thumbnail');
      imageLink.appendChild(listingImg);

      additionalImagesContainer.appendChild(imageLink);
    }

    listingGalleryContainer.appendChild(additionalImagesContainer);

    // Listing Title
    const listingTitle = document.getElementById('specific-title');
    listingTitle.textContent = singleListing.data.title;

    // Listing Description
    const listingDescription = document.getElementById('specific-description');
    listingDescription.textContent = singleListing.data.description;

    // Current Bid
    const currentBidText = document.getElementById('current-bid-text');
    currentBidText.textContent = 'Current Bid:';

    const currentBidAmount = document.getElementById('current-bid-amount');
    currentBidAmount.textContent = 'Variable Amount 000 $';

    //Ends At Date
    const endsAtDate = document.getElementById('ends-at');
    endsAtDate.textContent = `Auction ends at: ${new Date(singleListing.data.endsAt).toLocaleString()}`;

    return singlePostMainContainer;
  } catch (error) {
    console.error('Error fetching listing:', error);
  }
}
