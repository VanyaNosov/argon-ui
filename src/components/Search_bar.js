import React from 'react';
import { Keyboard, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather, Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

function SearchBar({clicked, setClicked, searchPhrase, setSearchPhrase}) {
  const clickedEvent = () => {
    Keyboard.dismiss();
    setClicked(false);
  }
  return (
    <View style={styles.container}>
      <View style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }> 
        <Feather
          name="search"
          size={17}
          color="black"
          style={styles.search_img}
        />
        <TextInput
          placeholder='Search'
          style={styles.searchBar}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true)
          }}
        /> 
        {clicked && (
          <AntDesign 
            name="close"
            size={16} 
            color="black" 
            onPress={() => {
              clickedEvent()
              setSearchPhrase('')
            }}
          />
        )}     
      </View>
      {
        clicked && (
          <TouchableOpacity
           style={styles.button}
           onPress={() => {
            clickedEvent()
        }}>
           <Text style={styles.text_button}>Cancel</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 43,
    flexDirection: 'row',
    justifyContent: "flex-start",
    marginHorizontal: 15,
    alignItems: 'center'
  },

  searchBar__unclicked: {
    flexDirection: 'row',
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#CAD1D7',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },

  searchBar__clicked: {
    flexDirection: 'row',
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#CAD1D7',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '60%',
    justifyContent: "space-evenly",
  },

  search_img: {
    marginRight: 20
  },

  searchBar: {
    width: '90%',
  },

  button: {
    marginLeft: 10
  },
  text_button: {
    color: '#525F7F',
    fontSize: 16
  }
})