import {
  setAuthListener,
  setRegisterAuthListener,
} from './ui/listeners/authListener.mjs';
import { formValidation } from './validation/formValidation.mjs';
//import { getProfiles } from './profile/getProfiles.mjs';

setAuthListener();
setRegisterAuthListener();
formValidation();
//getProfiles();
