import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import React from "react";
import { Alert } from "react-native";
const auth = getAuth();

export const verifyEmailAndPassword = (
  email: string,
  pass: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  name?: string
) => {
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email) && pass.length >= 8) {
    name == undefined
      ? loginHandler(email, pass, setLoading)
      : signupHandler(email, pass, name, setLoading);
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
  pass: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
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
  setLoading(false);
};
const signupHandler = async (
  email: string,
  pass: string,
  name: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const formatName =
    name.charAt(0).toUpperCase() + name.slice(1);
  setLoading(true);
  try {
    const userCredenticial =
      await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
    await updateProfile(userCredenticial.user, {
      displayName: formatName,
    });
  } catch (e: any) {
    if (e.code === "auth/email-already-in-use") {
      Alert.alert(
        "Already taken",
        "This email is already taken"
      );
    }
  }
  setLoading(false);
};

export const logoutHandler = async (
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  await signOut(auth);
  setUser(null);
};
