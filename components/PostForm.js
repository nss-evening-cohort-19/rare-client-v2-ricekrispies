/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { updatePost, createPost } from '../utils/data/postData';

const initialState = {
  id: null,
  title: '',
  publicationDate: '',
  imageUrl: '',
  content: '',
};

const PostForm = ({ user, postObj }) => {
  const [currentPost, setCurrentPost] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postObj.id) {
      updatePost(user, currentPost, postObj.id).then(() => router.push('/posts'));
    } else {
      createPost(user, currentPost).then(() => router.push('/posts'));
    }
  };

  const getAndSet = () => {
    if (postObj.id) {
      setCurrentPost(postObj);
    }
  };
  useEffect(() => {
    getAndSet();
  }, [postObj]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentPost.title} onChange={handleChange} />
          <Form.Label>Publication Date</Form.Label>
          <Form.Control name="publicationDate" type="date" required value={currentPost.publicationDate} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="imageUrl" required value={currentPost.imageUrl} onChange={handleChange} />
          <Form.Label>Post Content</Form.Label>
          <Form.Control name="content" required value={currentPost.content} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

PostForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  postObj: PropTypes.shape({
    id: PropTypes.number,
  }),
};

PostForm.defaultProps = {
  postObj: initialState,
};

export default PostForm;
