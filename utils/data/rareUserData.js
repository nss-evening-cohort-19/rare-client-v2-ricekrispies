import { clientCredentials } from '../client';

const getRareUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

export { getRareUsers };
