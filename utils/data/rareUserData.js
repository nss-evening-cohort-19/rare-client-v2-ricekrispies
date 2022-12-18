import { clientCredentials } from '../client';

const getRareUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

// const isActive = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/users/${id}/active`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id }),
//   })
//     .then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

// const isNotActive = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/users/${id}/notactive`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id }),
//   })
//     .then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

export { getRareUsers };
