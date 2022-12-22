import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deletePost } from '../utils/data/postData';

export default function PostCard({
  title, content, publicationDate, id, onUpdate, imageUrl,
}) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${title}?`)) {
      deletePost(id).then(() => onUpdate());
      window.location.reload();
    }
  };
  return (

    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Img variant="top" src={imageUrl} alt={title} style={{ height: '400px' }} />
          <Card.Text>{publicationDate}</Card.Text>
          <Link href={`/posts/${id}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/posts/edit/${id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisPost} className="m-2">
            DELETE
          </Button>
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publicationDate: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
