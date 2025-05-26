import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type props = {
  onPress: () => void;
};
const BackBtn = ({ onPress }: props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <AntDesign
        name="leftcircle"
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
