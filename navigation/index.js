import React from 'react';
import {AuthProvider} from './AuthProvider';
import ForumRoutes from './Routes';
import Routes from '../src/Routes/Routes';
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
      {/* <ForumRoutes /> */}
    </AuthProvider>
  );
};

export default Providers;
