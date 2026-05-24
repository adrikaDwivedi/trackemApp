
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWGBu2ZJT6pHadPOCpDtg7VGpcqR47ygY",
  authDomain: "trackem-bb07f.firebaseapp.com",
  projectId: "trackem-bb07f",
  storageBucket: "trackem-bb07f.firebasestorage.app",
  messagingSenderId: "658108861422",
  appId: "1:658108861422:web:df7673fa126a78c9039cff",
  measurementId: "G-KN8Y9W0MYL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAf31SE5HklvgueXuv3-g8zgPfmAcrXk70",
//   authDomain: "trackit-21b16.firebaseapp.com",
//   projectId: "trackit-21b16",
//   storageBucket: "trackit-21b16.firebasestorage.app",
//   messagingSenderId: "537579200110",
//   appId: "1:537579200110:web:0b9afedd4972357c62d07f"
// };


// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// // ---- Prevent Re-init ----
// let app;
// let auth;

// if (!getApps().length) {
//   // First time initialization
//   app = initializeApp(firebaseConfig);
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
//   });
// } else {
//   // Already initialized — reuse instance
//   app = getApp();
//   auth = getAuth(app);
// }

// export { app, auth, RecaptchaVerifier, signInWithPhoneNumber };

