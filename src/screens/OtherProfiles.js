import { StyleSheet, Text, View } from 'react-native'
import RequestCard from '../components/RequestCard'

const OtherProfiles = () => {
  return (
    <View style={styles.container}>
     <RequestCard />
    </View>
  )
}

export default OtherProfiles

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
  },
})