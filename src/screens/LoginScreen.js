import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";



export default function LoginScreen() {
 const navigation = useNavigation();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

 const handleAuth = async () => {
  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
    }

    navigation.replace("MainScreen");

  } catch (err) {
    Alert.alert("Auth Error", err.message);
  }
};

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20, color: "#000" }}>
        {isLogin ? "Login" : "Sign Up"}
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <Button
        title={isLogin ? "Login" : "Create Account"}
        onPress={handleAuth}
      />

      <View style={{ height: 10 }} />

      <Button
        title={
          isLogin
            ? "New here? Create account"
            : "Already have an account? Login"
        }
        onPress={() => setIsLogin(!isLogin)}
      />
    </View>
  );
}
