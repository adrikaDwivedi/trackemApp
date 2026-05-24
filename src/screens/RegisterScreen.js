import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase/config";



export default function RegisterScreen() {
 const navigation = useNavigation();
// const auth = getAuth();

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
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.page}>
          <View style={styles.card}>
            <Text style={styles.headerText}>{isLogin ? "Login" : "Sign Up"}</Text>
            <Text style={styles.subHeaderText}>
              Enter your details below to resume tracking your trails.
            </Text>

            <Text style={styles.label}>REGISTERED EMAIL</Text>
            <TextInput
              placeholder="e.g. guide@vanguard.co"
              placeholderTextColor="#9AA0A6"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />

            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#9AA0A6"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity onPress={handleAuth} style={styles.primaryButton} activeOpacity={0.85}>
              <Text style={styles.primaryButtonText}>{isLogin ? "Login" : "Create Account"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.secondaryButton} activeOpacity={0.85}>
              <Text style={styles.secondaryButtonText}>
                {isLogin ? "New here? Create account" : "Already have an account? Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },
  page: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 28,
    elevation: 8,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#122620",
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 15,
    color: "#607069",
    marginBottom: 24,
    lineHeight: 22,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#607069",
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#F6F8F7",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 15,
    color: "#172B1F",
    borderWidth: 1,
    borderColor: "#E6EAE8",
  },
  primaryButton: {
    marginTop: 4,
    backgroundColor: "#1E4B13",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: "#1E4B13",
    fontSize: 14,
    fontWeight: "600",
  },
});
