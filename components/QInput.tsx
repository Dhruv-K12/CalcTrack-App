import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type props = {
  placeholder: string;
  onChangeText: (val: string) => void;
  value: string;
  text: string;
  maxLength: number;
  width?: number;
};
const QInput = ({
  placeholder,
  value,
  text,
  onChangeText,
  maxLength,
  width,
}: props) => {
  return (
    <View
      style={{
        width: width ? width : "60%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
      }}
    >
      <TextInput
        style={{
          width: "60%",
          height: 60,
          fontSize: 17,
          paddingLeft: 20,
        }}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={maxLength}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default QInput;

const styles = StyleSheet.create({});
