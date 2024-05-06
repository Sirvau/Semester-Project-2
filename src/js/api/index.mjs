import { hideElements } from './ui/visability/showHideToggle.mjs';
import { toggleButtonsVisibility } from './ui/visability/showHideToggle.mjs';
import './ui/listeners/login.mjs';
import './ui/listeners/logout.mjs';
import './ui/listeners/register.mjs';
import { getListings } from './listings/getListings.mjs';

hideElements();
toggleButtonsVisibility();
getListings();
