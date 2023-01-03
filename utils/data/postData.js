import { clientCredentials } from '../client';

const getPosts = (uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getPostById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        publicationDate: data.publication_date,
        imageUrl: data.image_url,
        content: data.content,
        approved: data.approved,
      });
    })
    .catch(reject);
});

const createPost = (user, post) => new Promise((resolve, reject) => {
  const postObj = {
    title: post.title,
    publication_date: post.publicationDate,
    image_url: post.imageUrl,
    content: post.content,
    approved: post.approved,
    uid: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/posts`, {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

const updatePost = (user, post, id) => new Promise((resolve, reject) => {
  const postObj = {
    id: post.id,
    title: post.title,
    publication_date: post.publicationDate,
    image_url: post.imageUrl,
    content: post.content,
    approved: post.approved,
  };
  fetch(`${clientCredentials.databaseURL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postObj),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deletePost = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const approvedChange = (id, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/posts/${id}/change_approved`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: uid },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getPosts, createPost, updatePost, getPostById, deletePost, approvedChange,
};
