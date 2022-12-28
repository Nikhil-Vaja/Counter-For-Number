import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UsingFlatList() {
    const names = [
        {
            index: "1",
            name:'Hi,'
        },
        {
            index: "2",
            name:'My'
        },
        {
            index: "3",
            name:'name'
        },
        {
            index: "4",
            name:'is'
        },
        {
            index: "5",
            name:'Nikhil'
        }
    ]


  return (
    <FlatList style={styles.superMain}
        keyExtractor={(key) => {
            return key.index
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={names} 
        renderItem={(element) => {
            return (
                console.log(element.item.name),
                <Text style={styles.mainView}>{element.item.name}</Text>
                )
            }}
    />
  )
}

const styles = StyleSheet.create({
    mainView: {
        color: 'black',
        fontSize: 20,
        paddingBottom: 50,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 20,
        backgroundColor: 'powderblue',
        alignContent: 'center'
    },
    superMain: {
        flex: 1,
        textAlign: 'center',
        margin: 10,
        padding: 10,
        paddingBottom: 600
   }
})