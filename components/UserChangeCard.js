/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import { deleteUserChange } from '../utils/data/userChangeData';
import { userActiveChange, userStaffChange } from '../utils/data/rareUserData';
import { useRouter } from 'next/router';

export default function UserChangeCard({
  id, action, modified_userLN, modified_userFN, modified_userID, admin, onUpdate,
}) {
  const router = useRouter();
  const { user } = useAuth();
  const approveThisAction = () => {
    if (action === 'promote' || action === 'demote') {
      userStaffChange(modified_userID, user.uid).then(deleteUserChange(id).then(() => router.push('/users')));
    } else if (action === 'activate' || action === 'deactivate') {
      userActiveChange(modified_userID, user.uid).then(deleteUserChange(id).then(() => router.push('/users')));
    } else if (action === 'promoteAndActivate' || action === 'demoteAndDeactivate') {
      userStaffChange(modified_userID, user.uid).then(() => (userActiveChange(modified_userID, user.uid))).then(deleteUserChange(id).then(() => router.push('/users')));
    }
  };
  const deleteThisUChange = () => {
    if (window.confirm(`Delete ${action}?`)) {
      deleteUserChange(id).then(() => onUpdate());
      window.location.reload();
    }
  };

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{action}</Card.Title>
          <Card.Text>{modified_userFN} {modified_userLN}</Card.Text>
          <Button variant="danger" onClick={deleteThisUChange} className="m-2">
            DELETE
          </Button>
          {
            user.uid !== admin ? (
              <Button variant="danger" onClick={approveThisAction} className="m-2">
                APPROVE
              </Button>
            ) : <>This action is pending approval</>
          }
        </Card.Body>
        <Card.Footer />
      </Card>
    </>
  );
}

UserChangeCard.propTypes = {
  id: PropTypes.number.isRequired,
  action: PropTypes.string.isRequired,
  admin: PropTypes.string.isRequired,
  modified_userFN: PropTypes.string.isRequired,
  modified_userLN: PropTypes.string.isRequired,
  modified_userID: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// UserChangeCard.propTypes = {
//   changeObj: PropTypes.shape({
//     id: PropTypes.number,
//     action: PropTypes.string,
//     admin: PropTypes.shape({
//       id: PropTypes.number,
//       first_name: PropTypes.string,
//       last_name: PropTypes.string,
//       uid: PropTypes.string,
//     }).isRequired,
//     second_admin: PropTypes.shape({
//       id: PropTypes.number,
//       first_name: PropTypes.string,
//       last_name: PropTypes.string,
//       uid: PropTypes.string,
//     }).isRequired,
//     modified_user: PropTypes.shape({
//       id: PropTypes.number,
//       first_name: PropTypes.string,
//       last_name: PropTypes.string,
//       uid: PropTypes.string,
//     }).isRequired,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };
