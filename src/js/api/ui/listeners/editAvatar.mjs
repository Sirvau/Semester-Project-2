import { editAvatar } from '../../profile/editAvatar.mjs';

export function editAvatarListener() {
  const form = document.querySelector('form#edit-avatar-form');

  try {
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
          const formData = new FormData(form);
          const avatarData = formData.get('avatar');

          await editAvatar(avatarData);
          window.location.reload();
        } catch (error) {
          console.error('Error editing avatar', error);
        }
      });
    }
  } catch (error) {
    console.error('Error adding edit avatar listener', error);
  }
}
