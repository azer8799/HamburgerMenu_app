import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login.js';
import { createDrawerNavigator } from "react-navigation-drawer";
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {
  ProfileScreen,
  MessageeScreen,
  SignOutScreen
} from "./src/screens/Index";
import SideMenu from './SideMenu.js';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen:{
    screen:ProfileScreen,
    navigationOptions:{
      title:"Profile",
      drawerIcon:() => <Feather name="user" size={15} />
    }
  },
  MessageeScreen:{
    screen:MessageeScreen,
    navigationOptions:{
      title:"Message",
      drawerIcon:() => <Feather name="message-square" size={15} />
    }
  },
 
  SignOutScreen:{
    screen:SignOutScreen,
    navigationOptions:{
      title:"Sign Out",
      drawerIcon:() => <Feather name="log-out" size={15} />
    }
  },
  },
  {
    contentComponent: props => <SideMenu {...props} />
  }
  );

const navigator = createStackNavigator(
  {
    Home: Login,
    LoginPage: DrawerNavigator,
  },
);

export default createAppContainer(navigator);



















