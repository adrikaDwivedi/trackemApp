import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebase";

export async function sendOTP(phoneNumber, recaptchaVerifier) {
  const provider = new PhoneAuthProvider(auth);
  const verificationId = await provider.verifyPhoneNumber(
    phoneNumber,
    recaptchaVerifier
  );
  return verificationId;
}

export async function verifyOTP(verificationId, code) {
  const credential = PhoneAuthProvider.credential(verificationId, code);
  return signInWithCredential(auth, credential);
}
