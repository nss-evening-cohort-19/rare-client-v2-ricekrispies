import { clientCredentials } from '../client';

const getRareUsers = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getRareUsers };
