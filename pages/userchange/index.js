/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getUserChanges } from '../../utils/data/userChangeData';
import { useAuth } from '../../utils/context/authContext';
import UserChangeCard from '../../components/UserChangeCard';

function Home() {
  const user = useAuth();
  const [uChanges, setUChanges] = useState([]);

  useEffect(() => {
    getUserChanges(user.uid).then((setUChanges));
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
              admin={uChange.admin.uid}
              modified_userFN={uChange.modified_user.first_name}
              modified_userLN={uChange.modified_user.last_name}
              modified_userID={uChange.modified_user.id}
              onUpdate={getUserChanges}
            />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
