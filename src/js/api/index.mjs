import { hideElements } from './ui/visability/showHideToggle.mjs';
import { toggleButtonsVisibility } from './ui/visability/showHideToggle.mjs';
import './ui/listeners/login.mjs';
import './ui/listeners/logout.mjs';
import './ui/listeners/register.mjs';
import { getSingleProfile } from './profile/getProfiles.mjs';
import { createListingListener } from './ui/listeners/createListing.mjs';
import { editAvatarListener } from './ui/listeners/editAvatar.mjs';

hideElements();
toggleButtonsVisibility();
createListingListener();
getSingleProfile();
editAvatarListener();
