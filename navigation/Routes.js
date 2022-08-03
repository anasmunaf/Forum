import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import FeedStack from './AppStack';
import HomeScreen from '../screens/HomeScreen';

const Routes = (props) => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return <>{user ? <HomeScreen {...props} /> : <AuthStack />}</>;
};

export default Routes;
