import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Card } from 'react-bootstrap';
// import { isActive, isNotActive } from '../utils/data/rareUserData';
// import { useAuth } from '../../utils/context/authContext';

export default function RareUserCard({
  firstName, lastName, bio, email,
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User: {firstName} {lastName}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Card.Text>Contact: {email}</Card.Text>
        {/* { active ? (
          <Button
            onClick={
              inactiveUser
            }
          >
            Deactivate
          </Button>
        ) : (
            <Button
              onClick={
                activeUser
              }
            >
              Activate
            </Button>
        )} */}
        <Button>Author</Button>
        <Button>Admin</Button>
      </Card.Body>
    </Card>
  );
}

RareUserCard.propTypes = {
  // id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // active: PropTypes.bool.isRequired,
};
