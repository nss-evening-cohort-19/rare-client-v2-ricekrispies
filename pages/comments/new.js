import React from 'react';
import CommentForm from '../../components/CommentForm';
import { useAuth } from '../../utils/context/authContext';

export default function NewComment() {
  const { user } = useAuth();
  return (
    <div><h2>Create new Comment</h2>
      <CommentForm user={user} />
    </div>
  );
}
