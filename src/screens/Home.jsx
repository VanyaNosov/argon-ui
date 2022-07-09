import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { List } from '../components/List';
import SearchBar from '../components/Search_bar';

function Home({ navigation }) {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <SafeAreaView style={styles.home_container}>
      <View style={styles.search_container}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      <View style={styles.items_container}>
        <List
          searchPhrase={searchPhrase}
          setClicked={setClicked}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: '#F8F9FE',
    flex: 1,
  },

  search_container: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  items_container: {
    flex: 7,
  },
});

export default Home;
