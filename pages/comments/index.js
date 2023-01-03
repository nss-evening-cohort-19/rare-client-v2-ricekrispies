import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import CommentCard from '../../components/CommentCard';
import { getComments } from '../../utils/data/commentData';

function Home() {
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getComments().then((setComments));
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/comments/new');
        }}
      >
        New Post
      </Button>
      <article className="comments">
        <h1>Comments</h1>
        {comments.map((comment) => (
          <section key={`comment--${comment.id}`} className="comment">
            <CommentCard
              id={comment.id}
              user={comment.user.email}
              createdOn={comment.created_on}
              content={comment.content}
              onUpdate={getComments}
            />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
