import {
  setAuthListener,
  setRegisterAuthListener,
} from './ui/listeners/authListener.mjs';
import { getProfiles } from './profile/getProfiles.mjs';

setAuthListener();
setRegisterAuthListener();

getProfiles();
