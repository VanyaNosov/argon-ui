import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DrawerNavigate } from './src/navigation/DrawerNavigation';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigate />
    </NavigationContainer>
  )
}
