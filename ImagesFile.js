import { View, Text, Image, StyleSheet} from 'react-native'
import CardDetail from './CardDetail'
import React from 'react'

export default function ImagesFile() {
  return (
    <View style={styles.mainContent}>
      <Text style={styles.mainText}>This is main image file.</Text>
      <Image source={require('./assets/laptop2.jpg')} style={styles.mainImage}/>
    
      <CardDetail 
        textData = 'This is first image file'
        imgData = {require('./assets/laptop.jpg')}
      />
      <CardDetail 
        textData = 'This is second image file'
        imgData = {require('./assets/laptop2.jpg')}
      />
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
    fontSize: 20,
    margin: 10,
  },
  mainImage: {
    height: 200, 
    width: 200,
  }
})