import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
const Main = () => {
  return (
    <LinearGradient
      colors={["#E4CF30", "#928103"]}
      style={{ flex: 1 }}
    ></LinearGradient>
  );
};

export default Main;

const styles = StyleSheet.create({});
