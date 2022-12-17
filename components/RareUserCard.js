import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export default function RareUserCard({
  firstName, lastName, bio, email, active,
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User: {firstName} {lastName}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Card.Text>Contact: {email}</Card.Text>
        <Button>Active{active}</Button>
        <Button>Author</Button>
        <Button>Admin</Button>
      </Card.Body>
    </Card>
  );
}

RareUserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
