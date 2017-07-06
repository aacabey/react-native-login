import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import SideBar from './components/SideBar';
import HomePage from './components/HomePage';

const Routes = DrawerNavigator(
  {
    HomePage: { screen: HomePage }
  },
  {
    initialRouteName: "HomePage",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default () => <Routes />;