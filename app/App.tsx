import { auth } from "@/firebaseConfig";
import Login from "@/Screens/AuthStack/Login";
import Main from "@/Screens/AuthStack/Main";
import Signup from "@/Screens/AuthStack/Signup";
import Home from "@/Screens/Tabs/Home";
import Profile from "@/Screens/Tabs/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as splashscreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
splashscreen.preventAutoHideAsync();
export type rootStackParamList = {
  Main: undefined;
  Login: undefined;
  Signup: undefined;
};
const Stack =
  createNativeStackNavigator<rootStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
const StackMain = createNativeStackNavigator();
const MainStack = () => {
  return (
    <StackMain.Navigator
      screenOptions={{ headerShown: false }}
    >
      <StackMain.Screen name="Tabs" component={MainTabs} />
    </StackMain.Navigator>
  );
};
const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
const App = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [loaded, error] = useFonts({
    "inter-bold": require("../assets/fonts/Inter/static/Inter_18pt-ExtraBold.ttf"),
    "Hold-wood": require("../assets/fonts/HoltwoodOneSC-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
      setLoading(false);
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  if (!loading) {
    splashscreen.hideAsync();
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? <MainStack /> : <AuthStack />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
