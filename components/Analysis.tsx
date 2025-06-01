import { RootMainStackParamList } from "@/app/App";
import { useMainCtx } from "@/MainContext";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
type navigation =
  NativeStackNavigationProp<RootMainStackParamList>;
const Analysis = () => {
  const ctx = useMainCtx();
  const [data, setData] = useState(0);
  const navigation = useNavigation<navigation>();
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (ctx?.totalCalories) {
      const sum =
        ((ctx?.ateCalories / ctx?.totalCalories) * 100) /
        100;
      const value = Number(sum.toFixed(2));
      if (value <= 1) {
        setData(value);
      }
    }
  }, [ctx?.ateCalories]);
  const chartConfig = {
    backgroundColor: "white",
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `black`,
    style: {
      borderRadius: 20,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "5",
      stroke: "#ffa726",
    },
  };

  const Data = {
    data: [data],
    labels: ["consume"],
  };
  return (
    <>
      <View
        style={{
          width: width - 10,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 20,
          height: 240,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {ctx?.totalCalories ? (
          <>
            <ProgressChart
              data={Data}
              width={200}
              height={180}
              chartConfig={chartConfig}
              strokeWidth={20}
              hideLegend
              radius={80}
              style={{
                borderRadius: 20,
              }}
            />
            <Text style={{ fontSize: 14 }}>
              Total Calories : {ctx?.totalCalories}
            </Text>
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 40,
              }}
            >
              <Text>Remaining Calories</Text>
              <Text>
                {Math.floor(
                  ctx?.totalCalories - ctx?.ateCalories
                )}
              </Text>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Fontisto
              name="locked"
              size={100}
              color="grey"
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Questions")
              }
              style={{
                alignSelf: "center",
                backgroundColor: "#0A5EB0",
                margin: 5,
                width: "50%",
                alignItems: "center",
                height: 40,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>
                Start Your Journey Now
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default Analysis;
