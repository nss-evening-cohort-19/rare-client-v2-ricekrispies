import { clientCredentials } from '../client';

const getRareUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

const userStaffChange = (id, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${id}/change_is_staff`, {
    method: 'PUT',
    headers: {
      Authorization: uid,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => resolve(response))
  .catch((error) => reject(error));
});

const userActiveChange = (id, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${id}/change_is_active`, {
    method: 'PUT',
    headers: {
      Authorization: uid,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => resolve(response))
  .catch((error) => reject(error));
});

export { getRareUsers, userStaffChange, userActiveChange };
