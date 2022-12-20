import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '../../utils/data/postData';
import PostCard from '../../components/PostCard';

export default function ViewPost() {
  const [viewPosts, setViewPost] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getPostById(id).then(setViewPost);
  }, [id]);

  return (
    <div className="view-card">
      <PostCard
        key={id}
        id={viewPosts.id}
        title={viewPosts.title}
        publicationDate={viewPosts.publication_date}
        imageUrl={viewPosts.imageUrl}
        content={viewPosts.content}
        approved={viewPosts.approved}
      />
    </div>
  );
}
