import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
type props = {
  placeholder: string;
  onChangeText: (val: string) => void;
  value: string;
  secureTextEntry?: boolean;
  password?: boolean;
};
const AuthInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  password,
}: props) => {
  const [pass, showPass] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={password && !pass}
      />
      {password && (
        <Ionicons
          onPress={() => showPass((state) => !state)}
          style={styles.icon}
          name={pass ? "eye" : "eye-off"}
          size={24}
          color="black"
        />
      )}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
    paddingLeft: 10,
  },
  mainContainer: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    right: 40,
    top: 16,
  },
});
