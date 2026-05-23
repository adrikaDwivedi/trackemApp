import { StyleSheet, Text, View } from 'react-native'
import {useEffect} from 'react'
import { Image } from 'react-native'
import Animated , { BounceIn, BounceOut } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect (() =>{
    const timer = setTimeout(() =>{
      navigation.replace('BottomTabNav');
    },5000);

    return () => clearTimeout(timer);
  }  , [])
  
  return (
    <Animated.View entering={BounceIn.duration(5000)} style={styles.container} exiting={BounceOut.duration(5000)}>
         
       <Image
       source={require('../../assets/iconsplash.png')} 
       style={{width:300, height:300}}
       />
  </Animated.View>

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