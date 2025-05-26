import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <LinearGradient
      colors={["#DAC842", "#9A914B"]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text></Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
