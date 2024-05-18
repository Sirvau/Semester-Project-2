import { hideElements } from './ui/visability/showHideToggle.mjs';
import { toggleButtonsVisibility } from './ui/visability/showHideToggle.mjs';
import { createListingListener } from './ui/listeners/createListing.mjs';
import { validateCreateListingNavForm } from './ui/listeners/createListing.mjs';

//Nav header Listeners
import './ui/listeners/login.mjs';
import './ui/listeners/logout.mjs';
import './ui/listeners/register.mjs';
createListingListener();
validateCreateListingNavForm();

//Visibility of elements
hideElements();
toggleButtonsVisibility();
