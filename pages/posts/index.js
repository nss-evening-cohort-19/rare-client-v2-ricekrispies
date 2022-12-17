/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../utils/data/postData';
import { useAuth } from '../../utils/context/authContext';

function Home() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getPosts(user.uid).then((setPosts));
  }, []);
  // console.warn(posts);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/posts/new');
        }}
      >
        New Post
      </Button>
      <article className="posts">
        <h1>Posts</h1>
        {posts.map((post) => (
          <section key={`post--${post.id}`} className="post">
            <PostCard
              id={post.id}
              title={post.title}
              publicationDate={post.publication_date}
              imageUrl={post.imageUrl}
              content={post.content}
              approved={post.approved}
              onUpdate={getPosts}
            />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
