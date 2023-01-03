import React from 'react';
import PostForm from '../../components/Forms/PostForm';
import { useAuth } from '../../utils/context/authContext';

export default function NewPost() {
  const { user } = useAuth();
  return (
    <div><h2>Create new Post</h2>
      <PostForm user={user} />
    </div>
  );
}
