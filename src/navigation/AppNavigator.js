import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import BottomTabNav from "../navigation/BottomTabNav";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
