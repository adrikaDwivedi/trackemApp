import { View, StyleSheet,Text } from "react-native";
import { ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";


export default function MainScreen() {

  const [region , setRegion] = useState(null);

  useEffect(() =>{
    let sub;
    (async () =>{
      const {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== "granted") return;

      sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000,
          distanceInterval: 5,
        },
        (loc) =>{
          setRegion({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );
    })(); 
    return () => sub?.remove();
  } ,[]);

  if (!region) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#000" />
        <Text style={{ marginTop: 10 }}>Fetching location…</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex:1 }}
        region={region}
        showsUserLocation
        followsUserLocation
      >
        <Marker coordinate={region} title="You" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
