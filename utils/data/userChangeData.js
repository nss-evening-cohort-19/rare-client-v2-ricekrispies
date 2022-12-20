import { clientCredentials } from '../client';

const getUserChanges = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/userchanges`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUserChangeById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/userchanges/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        action: data.action,
        admin: data.admin,
        secondAdmin: data.second_admin,
        modifiedUser: data.modified_user,
      });
    })
    .catch(reject);
});

const createUserChange = (user, userChange) => new Promise((resolve, reject) => {
  const userChangeObj = {
    action: userChange.action,
    admin: user.uid,
    second_admin: null,
    modified_user: userChange.modifiedUser,
  };
  fetch(`${clientCredentials.databaseURL}/userchanges`, {
    method: 'POST',
    body: JSON.stringify(userChangeObj),
    headers: {
      Authorization: user.uid,
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

const deleteUserChange = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/userchanges/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getUserChanges,
  getUserChangeById,
  createUserChange,
  deleteUserChange,
};
