import { editAvatar } from '../../profile/editAvatar.mjs';

export function editAvatarListener() {
  const form = document.getElementById('edit-avatar-form');

  try {
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
          const formData = new FormData(form);

          const avatarInput = formData.get('avatar');

          const avatarData = {
            avatar: {
              url: avatarInput,
              alt: '',
            },
          };

          await editAvatar(avatarData);
          window.location.pathname = '/profile/';
        } catch (error) {
          console.error('Error editing avatar', error);
        }
      });
    }
  } catch (error) {
    console.error('Error adding edit avatar listener', error);
  }
}

// Check validity

let urlInputAvatar = document.getElementById('avatar-url');

urlInputAvatar.addEventListener('change', (event) => {
  let urlInputAvatar = event.target;
  let valid = urlInputAvatar.checkValidity();
  if (!valid) {
    urlInputAvatar.classList.remove('is-valid');
    urlInputAvatar.classList.add('is-invalid');
  }
});
