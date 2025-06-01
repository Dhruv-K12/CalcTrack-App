import React from "react";
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type props = {
  src: ImageProps;
  onPress: () => void;
  children: string;
};
const CatoBtn = ({ src, onPress, children }: props) => {
  return (
    <View
      style={{
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image source={src} />
      </TouchableOpacity>
      <Text>{children}</Text>
    </View>
  );
};

export default CatoBtn;

const styles = StyleSheet.create({});
