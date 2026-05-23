import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const RequestCard = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.reqcard}>
    <Text style={styles.reqtext}>Request location - </Text>
      
      <TouchableOpacity style={styles.btn} onPress = 
      { () =>{
        console.log("button pressed");
        }}>
        <Text>Request</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  )
}

export default RequestCard

const styles = StyleSheet.create({
    cont:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    reqcard:{
        width: 350,
        height: 400,
        backgroundColor: "lightblue",
        borderRadius: 28,
    },
    reqtext:{
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: "center",
        marginTop:150,
    },
    btn:{
        padding: 14,
        width: 200,
        height: 50,
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 28,
        borderRadius: 28,
    }
})
