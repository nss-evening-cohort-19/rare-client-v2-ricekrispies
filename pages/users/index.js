import React, { useEffect, useState } from 'react';
import RareUserCard from '../../components/RareUserCard';
import { useAuth } from '../../utils/context/authContext';
import { getRareUsers } from '../../utils/data/rareUserData';

export default function Users() {
  const [rareUsers, setRareUsers] = useState([]);
  const { user } = useAuth();
  const getTheRareUsers = () => {
    getRareUsers(user.uid).then((data) => setRareUsers(data));
  };

  useEffect(() => {
    getTheRareUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <article>
        <h1>Rare Publishing Users</h1>
        {rareUsers.map((rareUser) => (
          <section key={`rareUser--${rareUser.id}`} className="rare-user">
            <RareUserCard id={rareUser.id} firstName={rareUser.first_name} lastName={rareUser.last_name} email={rareUser.email} bio={rareUser.bio} active={rareUser.active} />
          </section>
        ))}
      </article>
    </>
  );
}
