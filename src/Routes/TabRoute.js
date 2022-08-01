import * as React from 'react';
import Papers from '../Screens/Home/Papers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationConstant from '../constants/NavigationConstants';
import Routes from '../../navigation/Routes';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationConstant.PAPERS}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 2,
          borderRadius: 15,
          backgroundColor: '#efefdd',
        },
        labelStyle: {
          fontSize: 18,
          marginBottom: 15,
        },
      }}>
      <Tab.Screen name={NavigationConstant.PAPERS} component={Papers} />
      <Tab.Screen name={NavigationConstant.FORUM} component={Routes} />
    </Tab.Navigator>
  );
};

export default TabRoute;
