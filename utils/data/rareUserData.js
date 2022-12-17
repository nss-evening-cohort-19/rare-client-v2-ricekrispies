import { clientCredentials } from '../client';

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

// eslint-disable-next-line import/prefer-default-export
export { getRareUsers };
