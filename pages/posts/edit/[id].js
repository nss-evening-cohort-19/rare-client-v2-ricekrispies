import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '../../../utils/data/postData';
import PostForm from '../../../components/PostForm';

export default function EditPost() {
  const [editPost, setEditPost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getPostById(id).then(setEditPost);
  }, [id]);

  return (
    <div className="edit-form" style={{ height: '45rem', padding: '10%' }}>
      <PostForm postObj={editPost} />
    </div>
  );
}
