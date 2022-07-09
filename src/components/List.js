import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Keyboard
} from "react-native";


const Item = ({ name, deteils }) => (
  <View style={styles.item_container}>
    <Text style="styles.name">{ name }</Text>
    <Text style="styles.deteils">{ deteils }</Text>
  </View>
)

const DATA = [
  {
    id: 1,
    name: 'JS',
    deteils: 'gffgf'
  },

  { 
    id: 2,
    name: "Jd",
    deteils: 'hgjyg'
  },

  {
    id: 3,
    name: "Jb",
    deteils: 'aaaaaa'
  },
    
  {
    id: 4,
    name: "Jnn",
    deteils: 'ngnthrccc'
  },
]
export function List ({searchPhrase, setClicked}) {
  const renderItem = ({ item }) => {
    if(searchPhrase === "") {
      return <Item name={item.name} deteils={item.deteils}/>
    }
    if(item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <Item name={item.name} deteils={item.deteils}/>
    }
    if(item.deteils.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return <Item name={item.name} deteils={item.deteils}/>
    }
  } 
  
  return(
    <SafeAreaView>
    <View
      onStartShouldSetResponder={() => {
        setClicked(false);
    }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
   
  }
})
