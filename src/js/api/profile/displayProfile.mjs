import { getSingleProfile } from './getProfiles.mjs';

export async function displayProfile() {
  try {
    const profile = await getSingleProfile();

    const avatarImgContainer = document.getElementById(
      'avatar-image-container',
    );
    const avatarModalImgContainer = document.getElementById(
      'edit-avatar-modal-img-container',
    );

    if (avatarImgContainer) {
      const avatarImg = document.createElement('img');
      avatarImg.src = `${profile.data.avatar.url}`;
      avatarImg.alt = `${profile.data.avatar.alt}`;
      avatarImg.classList.add(
        'rounded-circle',
        'img-thumbnail',
        'border-0',
        'mx-auto',
        'd-block',
        'avatar-img',
      );

      avatarImgContainer.appendChild(avatarImg);
    }

    if (avatarModalImgContainer) {
      const avatarModalImg = document.createElement('img');
      avatarModalImg.src = `${profile.data.avatar.url}`;
      avatarModalImg.alt = `${profile.data.avatar.alt}`;
      avatarModalImg.classList.add(
        'rounded-circle',
        'img-thumbnail',
        'border-0',
        'mx-auto',
        'd-block',
        'avatar-img',
      );

      avatarModalImgContainer.appendChild(avatarModalImg);
    }

    const userName = document.getElementById('user-name');
    userName.textContent = `${profile.data.name}`;

    const userCredit = document.getElementById('user-credit');
    userCredit.textContent = `${profile.data.credits}`;
  } catch (error) {
    console.error(error);
  }
}
