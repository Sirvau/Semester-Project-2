import { getSingleProfile } from './getProfiles.mjs';

export async function displayProfile() {
  try {
    const profile = await getSingleProfile();

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

    const avatarImgContainer = document.getElementById(
      'avatar-image-container',
    );
    avatarImgContainer.classList.add(
      'd-flex',
      'justify-content-center',
      'align-center',
    );

    avatarImgContainer.appendChild(avatarImg);

    const userName = document.getElementById('user-name');
    userName.textContent = `${profile.data.name}`;

    const userCredit = document.getElementById('user-credit');
    userCredit.textContent = `${profile.data.credits}`;
  } catch (error) {
    console.error(error);
  }
}

displayProfile();
