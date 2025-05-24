import Login from "@/Screens/AuthStack/Login";
import Main from "@/Screens/AuthStack/Main";
import Signup from "@/Screens/AuthStack/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <SafeAreaProvider>
      <AuthStack />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
