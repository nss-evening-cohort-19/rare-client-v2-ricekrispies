import { clientCredentials } from '../client';

const getIndividualUser = (userId, uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => (response.status === 200 ? response : false))
    .then((response) => {
      if (response) {
        resolve(response.json());
      } else {
        throw new Error('403 response from server');
      }
    })
    .catch(reject);
});

const getRareUsers = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => (response.status === 200 ? response : false))
    .then((response) => {
      if (response) {
        resolve(response.json());
      } else {
        throw new Error('403 response from server');
      }
    })
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

// eslint-disable-next-line import/prefer-default-export
export {
  getIndividualUser, getRareUsers, userActiveChange, userStaffChange,
};
