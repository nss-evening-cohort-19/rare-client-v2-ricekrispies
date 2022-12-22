import { clientCredentials } from '../client';

const getIndividualUser = (userId, uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        bio: data.bio,
        email: data.email,
        createdOn: data.created_on,
        active: data.active,
        isStaff: data.is_staff,
      });
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

const createUserChange = (obj, admin, modifyUser) => new Promise((resolve, reject) => {
  const userChangeObj = {
    admin,
    action: obj.action,
    second_admin: null,
    modified_user: modifyUser,
  };
  fetch(`${clientCredentials.databaseURL}/userchange`, {
    method: 'POST',
    body: JSON.stringify(userChangeObj),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export {
  getIndividualUser, getRareUsers, userActiveChange, userStaffChange,
  createUserChange,
};
