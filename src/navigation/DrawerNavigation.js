import 'react-native-gesture-handler';
import React from 'react';


import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import DrawerItems from './items/DrawerItems';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Components } from '../screens/Components';
import { Reg } from '../screens/Registation';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


export function DrawerNavigate() {
  return (
    <Drawer.Navigator useLegacyImplementation
      screenOptions={{
        drawerActiveBackgroundColor: '#5E72E4',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
    }}>
      {
        DrawerItems.map(drawer => 
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            headerTintColor: '#525F7F',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="bell" size={24} color="#172B4D" style={{ marginRight: 10 }} />
                <MaterialCommunityIcons name="shopping" size={24} color="#172B4D" style={{ marginRight: 10 }} />
              </View>
            ),
            drawerIcon: ({ focused }) =>
              drawer.iconType === 'Feather' ?
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#ffff" : "black"}
                />
                :
                drawer.iconType === 'MaterialIcons' ?
                  <MaterialIcons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#ffff" : "black"}
                  />
                  :
                  <AntDesign
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#ffff" : "black"}
                  />
            ,
          }}

          component={
            drawer.name === 'Home' ? Home
              : drawer.name === 'Profile' ? Profile
                : drawer.name === 'Components' ? Components
                  : Reg
          }
        />)
      }
    </Drawer.Navigator >
  );
}