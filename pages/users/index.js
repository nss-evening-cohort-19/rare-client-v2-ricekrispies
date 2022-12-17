import React, { useEffect, useState } from 'react';
import RareUserCard from '../../components/RareUserCard';
import { getRareUsers } from '../../utils/data/rareUserData';

export default function Users() {
  const [rareUsers, setRareUsers] = useState([]);

  const getTheRareUsers = () => {
    getRareUsers().then((data) => setRareUsers(data));
  };

  useEffect(() => {
    getTheRareUsers();
  }, []);

  return (
    <>
      <article>
        <h1>Rare Publishing Users</h1>
        {rareUsers.map((rareUser) => (
          <section key={`rareUser--${rareUser.id}`} className="rare-user">
            <RareUserCard id={rareUser.id} first_name={rareUser.first_name} last_name={rareUser.last_name} email={rareUser.email} bio={rareUser.bio} active={rareUser.active} />
          </section>
        ))}
      </article>
    </>
  );
}
