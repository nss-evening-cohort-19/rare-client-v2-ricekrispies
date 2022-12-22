import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { deleteUserChange } from '../utils/data/userChangeData';

export default function UserChangeCard({
  uChangeObj, onUpdate,
}) {
  const deleteThisUChange = () => {
    if (window.confirm(`Delete ${uChangeObj.action}?`)) {
      deleteUserChange(uChangeObj.id).then(() => onUpdate());
      window.location.reload();
    }
  };
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{uChangeObj.action}</Card.Title>
          <Card.Text>modified user name</Card.Text>
          <Card.Text>admin name</Card.Text>
          <Button variant="danger" onClick={deleteThisUChange} className="m-2">
            DELETE
          </Button>
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

UserChangeCard.propTypes = {
  uChangeObj: PropTypes.shape({
    id: PropTypes.number,
    action: PropTypes.string,
    admin: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      uid: PropTypes.string,
    }).isRequired,
    modifiedUser: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      uid: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
