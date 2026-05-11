import React, { forwardRef, useImperativeHandle } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { auth } from "./firebase";

const Recaptcha = forwardRef((props, ref) => {
  let verifierRef = null;

  useImperativeHandle(ref, () => ({
    getVerifier: () => verifierRef,
  }));

  return (
    <FirebaseRecaptchaVerifierModal
      ref={(ref) => (verifierRef = ref)}
      firebaseConfig={auth.app.options}
      attemptInvisibleVerification={true}
    />
  );
});

export default Recaptcha;
