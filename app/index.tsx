import { CtxProvider } from "@/MainContext";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import App from "./App";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <CtxProvider>
        <App />
      </CtxProvider>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
