import React from 'react';
import Screen from './Screen.js';

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile" />
export const MessageeScreen = ({navigation}) => <Screen navigation={navigation} name="Message" />
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name="SignOut" />