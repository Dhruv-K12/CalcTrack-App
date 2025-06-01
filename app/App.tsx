import { auth } from "@/firebaseConfig";
import { getItems } from "@/Foodapi";
import { useMainCtx } from "@/MainContext";
import Login from "@/Screens/AuthStack/Login";
import Main from "@/Screens/AuthStack/Main";
import Signup from "@/Screens/AuthStack/Signup";
import NutritionInfo from "@/Screens/Stack/NutritionInfo";
import Questions from "@/Screens/Stack/Questions";
import Search from "@/Screens/Stack/Search";
import Home from "@/Screens/Tabs/Home";
import Profile from "@/Screens/Tabs/Profile";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as splashscreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
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
export type RootMainStackParamList = {
  Tabs: undefined;
  Search: undefined;
  NutritionInfo: { details: any };
  Questions: undefined;
};
const StackMain =
  createNativeStackNavigator<RootMainStackParamList>();
const MainStack = () => {
  return (
    <StackMain.Navigator
      screenOptions={{ headerShown: false }}
    >
      <StackMain.Screen name="Tabs" component={MainTabs} />
      <StackMain.Screen name="Search" component={Search} />
      <StackMain.Screen
        name="NutritionInfo"
        component={NutritionInfo}
      />
      <StackMain.Screen
        name="Questions"
        component={Questions}
      />
    </StackMain.Navigator>
  );
};
const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#EFDA3E",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="user"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const App = () => {
  const { user, setUser, setItems, setTotalCalories } =
    useMainCtx();
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
        setLoading(false);
        getItems(setItems, setTotalCalories);
        splashscreen.hideAsync();
      });
    }
  }, [loaded, error]);
  if ((!loaded && !error) || loading) {
    return null;
  }
  return (
    <>
      {user ? <MainStack /> : <AuthStack />}
      <StatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
