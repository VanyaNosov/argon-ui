import { StyleSheet, Text, View, Button } from 'react-native';
import { SignUp } from './src/components/Sing-up';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/DrawerContent'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#f4511e',
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //       headerRight: () => (
    //         <Button
    //           onPress={() => alert('This is a button!')}
    //           title="Info"
    //           color="red"
    //         />
    //       ),
    //     }}
    //   >
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
