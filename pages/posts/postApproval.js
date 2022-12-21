/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PostCard from '../../components/PostCard';
import { approvedChange, getPosts } from '../../utils/data/postData';
import { useAuth } from '../../utils/context/authContext';

function PostApproval() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  const getContent = () => {
    getPosts(user.uid).then(setPosts);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <article className="posts">
        <h1>Posts</h1>
        {posts.filter(((post) => (post.approved === false))).map((filteredPosts) => (
          <section key={`${filteredPosts.id}`} className="post">
            <PostCard
              id={filteredPosts.id}
              title={filteredPosts.title}
              publicationDate={filteredPosts.publication_date}
              imageUrl={filteredPosts.image_url}
              content={filteredPosts.content}
              approved={filteredPosts.approved}
              onUpdate={getPosts}
            />
            <Button
              onClick={() => {
                approvedChange(filteredPosts.id, user.uid).then(getContent());
              }}
            >
              Approve
            </Button>
          </section>
        ))}
      </article>
    </>
  );
}

export default PostApproval;
