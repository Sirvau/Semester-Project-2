import { addBidToListing } from '../../listings/addBid.mjs';
import { ID } from '../../constants.mjs';

export function addBidListener() {
  const form = document.getElementById('place-bid-form');

  try {
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
          const formData = new FormData(form);
          const addBidInput = formData.get('bid-input');

          const parseAddBidInput = parseFloat(addBidInput);

          const bidData = {
            amount: parseAddBidInput,
          };

          await addBidToListing(ID, bidData);
          window.location.pathname = '/Listed-items/';
        } catch (error) {
          console.error('Error adding bid', error);
        }
      });
    }
  } catch (error) {
    console.error('Error adding bid listener', error);
  }
}
