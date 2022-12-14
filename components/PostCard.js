import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import { deletePost } from '../../utils/data/postData';

export default function PostCard({ postObj }) {
  // const deleteThisPost = () => {
  //   if (window.confirm(`Delete ${title}?`)) {
  //     deletePost(id).then(() => onUpdate());
  //     window.location.reload();
  //   }
  // };
  return (

    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{postObj.title}</Card.Title>
          <Card.Text>{postObj.content}</Card.Text>
          <Card.Text>{postObj.publication_date}</Card.Text>
          <Link href={`/posts/edit/${postObj.id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          {/* <Button variant="danger" onClick={deleteThisPost} className="m-2">
            DELETE
          </Button> */}
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    publication_date: PropTypes.number,
    content: PropTypes.string,
    approved: PropTypes.bool,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
