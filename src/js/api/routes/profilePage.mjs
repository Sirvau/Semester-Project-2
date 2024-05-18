import { displayProfile } from '../profile/displayProfile.mjs';
import { editAvatarListener } from '../ui/listeners/editAvatar.mjs';
import { validateCreateListingProfileForm } from '../ui/listeners/createListing.mjs';
import { validateEditAvatarForm } from '../ui/listeners/editAvatar.mjs';

export function profilePage() {
  displayProfile();
  validateEditAvatarForm();
  editAvatarListener();
  validateCreateListingProfileForm();
}

profilePage();
