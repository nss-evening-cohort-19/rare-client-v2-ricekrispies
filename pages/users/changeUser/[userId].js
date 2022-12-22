import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import UserChangeForm from '../../../components/Forms/UserChangeForm';
import { useAuth } from '../../../utils/context/authContext';
import { getIndividualUser } from '../../../utils/data/rareUserData';

export default function UserChangePage() {
  const [editUser, setEditUser] = useState({});
  const router = useRouter();
  const { userId } = router.query;
  const { user } = useAuth();

  const getPageContent = () => {
    getIndividualUser(userId, user.uid).then(setEditUser);
  };

  useEffect(() => {
    getPageContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <UserChangeForm obj={editUser} user={user} />
  );
}
