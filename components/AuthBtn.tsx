import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type props = {
  children: string;
  color: string;
  onPress: () => void;
};
const AuthBtn = ({ children, color, onPress }: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: color }]}
    >
      <Text style={{ fontSize: 20 }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  btn: {
    width: 180,
    height: 50,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "red",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
});
