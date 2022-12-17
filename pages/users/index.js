import React, { useEffect, useState } from 'react';
import { Button, FormCheck, Table } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getRareUsers } from '../../utils/data/rareUserData';

export default function Users() {
  const [rareUsers, setRareUsers] = useState([]);
  const { user } = useAuth();
  const getTheRareUsers = () => {
    getRareUsers(user.uid).then((data) => setRareUsers(data));
  };

  useEffect(() => {
    getTheRareUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <article>
        <h1>Rare Publishing Users</h1>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Bio</th>
              <th>Active</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {rareUsers.map((rareUser) => (
              <tr id={rareUser.id}>
                <td>{rareUser.id}</td>
                <td>{rareUser.first_name}</td>
                <td>{rareUser.last_name}</td>
                <td>{rareUser.email}</td>
                <td>{rareUser.bio}</td>
                <td><FormCheck checked={rareUser.active} /></td>
                <td><FormCheck checked={rareUser.is_staff} /></td>
                <Button>Edit User Status</Button>
                <Button>View User</Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </article>
    </>
  );
}
