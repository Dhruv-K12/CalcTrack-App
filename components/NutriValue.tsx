import React from "react";
import { Text, View } from "react-native";

type prop = {
  color: string;
  nutritionType: string;
  value: string;
};
const NutriValue = ({
  color,
  value,
  nutritionType,
}: prop) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>{nutritionType}</Text>
      <Text
        style={{
          backgroundColor: color,
          width: 100,
          textAlign: "center",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default NutriValue;
