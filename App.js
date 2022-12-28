import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import Counters from './Counters';
// import ImagesFile from './ImagesFile';
// import UsingFlatList from './UsingFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textContainer}>This the exapmle of the Counters!!</Text>
      <Button title='Try Me!' onPress={() => {Alert.alert(`You Press Button!`)}} />
      <TouchableOpacity onPress={() => {Alert.alert(`You Press TouchableOpacity!`)}}>
        <Text style={{color: 'black ', margin: 10}} >Try Me!</Text>
      </TouchableOpacity> */}
      <Counters />
      {/* <UsingFlatList /> */}
      {/* <ImagesFile /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 20
  },
});
