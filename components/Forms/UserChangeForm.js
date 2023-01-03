/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { createUserChange } from '../../utils/data/rareUserData';

// eslint-disable-next-line no-unused-vars
const initialState = {
  firstName: '',
  lastName: '',
  bio: '',
  email: '',
  createdOn: '',
  active: true,
  isStaff: false,
};

export default function UserChangeForm({
  obj, user,
}) {
  // eslint-disable-next-line no-unused-vars
  const [initialFormData, setInitialFormData] = useState({});
  const [formData, setFormData] = useState(initialState);
  const [userChangeData, setUserChangeData] = useState({});
  const router = useRouter();

  const userChangeObj = {
    action: '',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserChangeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFormContent = () => {
    if (obj.id) {
      setInitialFormData(obj);
      setFormData(obj);
      setUserChangeData(userChangeObj);
    }
  };

  useEffect(() => {
    getFormContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, obj]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserChange(userChangeData, user.uid, obj.id).then(() => router.push('/userchange'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name: {initialFormData.firstName} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name: {initialFormData.lastName} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Bio: {initialFormData.bio} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email: {initialFormData.email} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Created On: {initialFormData.createdOn} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check id="isStaff" name="isStaff" value={formData.isStaff} type="checkbox" label="Admin?" checked={formData.isStaff} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check id="active" name="active" type="checkbox" value={formData.active} label="Active" checked={formData.active} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="action" onChange={handleChange}>
          <option value="">Select an Option</option>
          <option key="promote" value="promote">
            Promote
          </option>
          <option key="demote" value="demote">
            Demote
          </option>
          <option key="activate" value="activate">
            Activate
          </option>
          <option key="deactivate" value="deactivate">
            Deactivate
          </option>
          <option key="promoteAndActivate" value="promoteAndActivate">
            Promote and Activate
          </option>
          <option key="demoteAndDeactivate" value="demoteAndDeactivate">
            Demote and Deactivate
          </option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

UserChangeForm.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  createdOn: PropTypes.string,
  active: PropTypes.bool,
  isStaff: PropTypes.bool,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isStaff: PropTypes.bool,
  }),
}.isRequired;
