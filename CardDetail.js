import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CardDetail({textData, imgData}) {
  return (
    <View>
      <Text style={styles.mainText}>{textData}</Text>
      <Image source={imgData} style={styles.mainImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    mainText: {
      fontSize: 16,
      margin: 10,
    },
    mainImage: {
      height: 200, 
      width: 200,
    }
  })