// import { editAvatar } from '../../profile/editAvatar.mjs';
// import { load } from '../../storage/load.mjs';
// import { save } from '../../storage/save.mjs';

// export function editAvatarListener() {
//   const form = document.querySelector('#edit-avatar-form');
//   const profile = load('profile');

//   if (form) {
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();

//       const avatarInput = document.getElementById('avatar');
//       const avatar = avatarInput.value;

//       try {
//         save(profile, {
//           userAvatar: avatar,
//         });

//         console.log('Profile saved successfully.');

//         await editAvatar();
//         window.location.reload();
//       } catch (error) {
//         console.error('Error saving avatar to profile:', error);
//       }
//     });
//   }
// }
