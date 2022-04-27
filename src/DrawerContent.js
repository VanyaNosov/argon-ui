import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
// export default [
//   {
//     name: 'Profile',
//     iconType: 'Material',
//     iconName: 'face-profile'
//   },
//   {
//     name: 'Settings',
//     iconType: 'Feather',
//     iconName: 'settings'
//   },
//   {
//     name: 'Saved Items',
//     iconType: 'Material',
//     iconName: 'bookmark-check-outline'
//   },
//   {
//     name: 'Refer a Friend!',
//     iconType: 'FontAwesome5',
//     iconName: 'user-friends'
//   }
// ]