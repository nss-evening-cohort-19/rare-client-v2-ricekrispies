/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getUserChanges } from '../../utils/data/userChangeData';

function Home() {
  const [uChanges, setUChanges] = useState([]);

  useEffect(() => {
    getUserChanges().then((setUChanges));
  }, []);

  return (
    <>
      <article className="posts">
        <h1>User Change Actions</h1>
        {uChanges.map((uChange) => (
          <section key={`uChange--${uChange.id}`} className="uChange">
            <UserChangeCard
              id={uChange.id}
              action={uChange.action}
              admin={uChange.admin}
              modifiedUser={uChange.modifiedUser}
              onUpdate={getUserChanges}
            />
          </section>
        ))}
      </article>
    </>
  );
}
