import { remove } from '../storage/remove.mjs';

export function logout() {
  remove('token');
  remove('profile');
}
