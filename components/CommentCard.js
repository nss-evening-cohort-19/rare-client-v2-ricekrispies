import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteComment } from '../utils/data/commentData';

export default function CommentCard({
  content, createdOn, id, onUpdate, user,
}) {
  const deleteThisComment = () => {
    if (window.confirm('Delete?')) {
      deleteComment(id).then(() => onUpdate());
      window.location.reload();
    }
  };
  return (

    <>
      <Card className="text-center" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>{user}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Text>{createdOn}</Card.Text>
          <Link href={`/comments/${id}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          <Link href={`/comments/edit/${id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisComment} className="m-2">
            DELETE
          </Button>
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

CommentCard.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  createdOn: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
