import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
       source={require('../../assets/iconsplash.png')} 
       style={{width:300, height:300}}
       />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
})