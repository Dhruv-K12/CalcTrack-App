import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
