/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
  id, firstName, lastName, bio, email, isStaff, createdOn, active,
}) {
  // eslint-disable-next-line no-unused-vars
  const [initialFormData, setInitialFormData] = useState(initialState);
  const [formData, setFormData] = useState(initialState);

  console.warn(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialFormData.active !== formData.active && initialFormData.isStaff !== formData.isStaff) {
      console.warn('Admin access and active change');
    } else if (initialFormData.isStaff !== formData.isStaff) {
      console.warn('Admin access change');
    } else if (initialFormData.active !== formData.active) {
      console.warn('Active change');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name: {firstName} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name: {lastName} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Bio: {bio} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email: {email} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Created On: {createdOn} </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          id="isStaff"
          name="isStaff"
          value={isStaff}
          type="checkbox"
          label="Admin?"
          checked={formData.isStaff}
          onChange={(e) => setFormData((prevState) => ({
            ...prevState,
            isStaff: e.target.checked,
          }))}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          id="active"
          name="active"
          type="checkbox"
          value={active}
          label="Active"
          checked={formData.active}
          onChange={(e) => setFormData((prevState) => ({
            ...prevState,
            active: e.target.checked,
          }))}
        />
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
};

UserChangeForm.defaultProps = {
  id: initialState.id,
  firstName: initialState.firstName,
  lastName: initialState.lastName,
  bio: initialState.bio,
  createdOn: initialState.createdOn,
  active: initialState.active,
  email: initialState.email,
  isStaff: initialState.isStaff,
};
