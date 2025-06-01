import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type props = {
  onPress: () => void;
  right?: boolean;
};
const BackBtn = ({ onPress, right }: props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <AntDesign
        name={right ? "rightcircle" : "leftcircle"}
        size={50}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  btn: {
    opacity: 0.8,
    margin: 4,
  },
});
