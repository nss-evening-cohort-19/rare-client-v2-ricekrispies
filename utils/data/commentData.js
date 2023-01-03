import { clientCredentials } from '../client';

const getComments = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const getCommentById = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        user: data.user,
        post: data.post,
        createdOn: data.created_on,
        content: data.content,
      });
    })
    .catch(reject);
});

const createComment = (user, comment) => new Promise((resolve, reject) => {
  const commentObj = {
    id: comment.id,
    user: comment.user,
    post: comment.post,
    createdOn: comment.created_on,
    content: comment.content,
  };
  fetch(`${clientCredentials.databaseURL}/comments`, {
    method: 'POST',
    body: JSON.stringify(commentObj),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch((error) => reject(error));
});

const updateComment = (user, comment, id) => new Promise((resolve, reject) => {
  const commentObj = {
    id: comment.id,
    user: comment.user,
    post: comment.post,
    createdOn: comment.created_on,
    content: comment.content,
  };
  fetch(`${clientCredentials.databaseURL}/comments/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObj),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteComment = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getCommentsByPost = (comments) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/comments/${comments.post}"`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getComments,
  createComment,
  updateComment,
  getCommentById,
  deleteComment,
  getCommentsByPost,
};
