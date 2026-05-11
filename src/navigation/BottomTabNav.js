import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import OtherProfiles from "../screens/OtherProfiles";
import {Ionicons} from "@expo/vector-icons";
import {View, Platform} from "react-native";
import {BlurView} from "expo-blur";

const Tab = createBottomTabNavigator();

function HomeTabs(){
    return (
        <Tab.Navigator
        screenOptions={({route}) =>({
            headerShown:false,
                tabBarIcon: ({focused, color , size}) =>{
                 let iconName;
                 if(route.name === "User"){
                    iconName = focused ? "person" : "person-outline";
                 }
                 else if(route.name==="Saved"){
                    iconName = focused ? "bookmark" : "bookmarks-outline";
                 }
                   return <Ionicons name={iconName} color={color} size={size} />
                },
                 tabBarActiveTintColor: "#ff7a18",
                 tabBarInactiveTintColor: "#bbb",

                 tabBarStyle: {
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.6)", // blur effect feel
                 borderTopWidth: 0,
                 elevation: 0,
                height: 65,
        },

  tabBarBackground: () =>
  Platform.OS === "ios" ? (
    <BlurView intensity={40} tint="dark" style={{ flex: 1 }} />
  ) : (
    <View style={{ flex: 1, backgroundColor: "rgba(20,20,20,0.9)" }} />
  ),

        })}
        >
            <Tab.Screen name="User" 
            component={MainScreen} 
            />
            <Tab.Screen name="Saved" 
            component={OtherProfiles} 
            options={{headerShown:false}} />
        </Tab.Navigator>
    )
}
export default HomeTabs;