import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";

export const verifyEmailAndPassword = (
  email: string,
  pass: string,
  name?: string
) => {
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email) && pass.length >= 8) {
    name == undefined
      ? loginHandler(email, pass)
      : signupHandler(email, pass, name);
  } else {
    if (!regex.test(email)) {
      Alert.alert(
        "Invalid Email",
        "Please enter valid email address"
      );
    } else {
      Alert.alert(
        "Invalid Password",
        "Your Password should contain 8 characters"
      );
    }
  }
};

const loginHandler = async (
  email: string,
  pass: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (e: any) {
    if (e.code === "auth/invalid-credential") {
      Alert.alert(
        "Invalid Credential",
        "Your email or password is incorrect"
      );
    }
  }
};
const signupHandler = async (
  email: string,
  pass: string,
  name: string
) => {
  try {
    const userCredenticial =
      await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
    await updateProfile(userCredenticial.user, {
      displayName: name,
    });
    console.log("signup");
  } catch (e: any) {
    if (e.code === "auth/email-already-in-use") {
      Alert.alert(
        "Already taken",
        "This email is already taken"
      );
    }
  }
};
