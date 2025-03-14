import React, { useEffect } from 'react';
import { PageLoader } from '@components/Loaders';
import { auth } from '@model';

export const Logout = () => {
  useEffect(() => {
    auth.logout();
  }, []);

  return <PageLoader />;
};
