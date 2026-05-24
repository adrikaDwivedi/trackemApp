import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigation]);

  const goNext = () => navigation.replace('Login');

  return (
    <>
    <Animated.View
      entering={BounceIn.duration(700)}
      exiting={BounceOut.duration(400)}
      style={styles.container}
    >
      <View style={styles.topArt}>
        <Animated.Image
          source={require('../../assets/iconsplash.png')}
          style={styles.art}
          entering={BounceIn.duration(900)}
        />
      </View>
 </Animated.View>
      <View style={styles.content}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIcon}>📍</Text>
          <Text style={styles.brand}>Trackem</Text>
        </View>

        <Text style={styles.catch}>Safely track your loved ones anytime</Text>


        <TouchableOpacity style={styles.getStarted} onPress={goNext} activeOpacity={0.85}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

      </View>
   </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBF7',
    justifyContent: 'space-between',
  },
  topArt: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    alignItems: 'center',
    marginTop: 100,
  },
  art: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    opacity: 0.98,
  },
  content: {
    paddingHorizontal: 28,
    paddingBottom: 36,
    marginBottom: 120,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandIcon: {
    fontSize: 22,
    color: '#1E4B13',
    marginRight: 8,
  },
  brand: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E4B13',
  },
  catch: {
    textAlign: 'center',
    color: '#607069',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 18,
    lineHeight: 22,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9D6CB',
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: '#2A6121',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statusText: {
    textAlign: 'center',
    color: '#1E4B13',
    fontWeight: '700',
    marginBottom: 18,
    letterSpacing: 1,
  },
  getStarted: {
    backgroundColor: '#1E4B13',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  version: {
    textAlign: 'center',
    color: '#9AA6A0',
    marginTop: 12,
    fontSize: 13,
  },
})