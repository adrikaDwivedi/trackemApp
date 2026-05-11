import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
    <AppNavigator/>
  )
}

export default App

const styles = StyleSheet.create({})
// import { View, Text } from "react-native";

// export default function App() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 20 }}>APP IS RENDERING</Text>
//     </View>
//   );
// }
