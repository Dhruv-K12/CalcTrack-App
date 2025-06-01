import { RootMainStackParamList } from "@/app/App";
import BackBtn from "@/components/backBtn";
import NutriValue from "@/components/NutriValue";
import {
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  BounceInUp,
} from "react-native-reanimated";

type props = {
  route: RouteProp<RootMainStackParamList, "NutritionInfo">;
};
type navigation = NativeStackNavigationProp<
  RootMainStackParamList,
  "NutritionInfo"
>;
const NutritionInfo = ({ route }: props) => {
  const { details } = route.params;
  const navigation = useNavigation<navigation>();
  const mainDetails = [
    {
      type: "Calorie",
      value: details.nf_calories,
    },
    {
      type: "Protein",
      value: details.nf_protein + "g",
    },
    {
      type: "Carbohydrates",
      value: details.nf_total_carbohydrate + "g",
    },
    {
      type: "Serving Size",
      value: details.serving_weight_grams + "g",
    },
    {
      type: "Cholestrol",
      value: details.nf_cholesterol + "mg",
    },
    {
      type: "Fat",
      value: details.nf_total_fat + "g",
    },
    {
      type: "Fiber",
      value: details.nf_dietary_fiber + "g-+",
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <BackBtn onPress={() => navigation.goBack()} />

      <Animated.Image
        sharedTransitionTag={details.food_name}
        style={{ alignSelf: "center", borderRadius: 20 }}
        source={{ uri: details.photo.thumb }}
        width={200}
        height={200}
      />
      <Animated.FlatList
        entering={BounceInUp.duration(1000)}
        data={mainDetails}
        renderItem={({ item }) => (
          <NutriValue
            nutritionType={item.type}
            value={item.value}
            color="#D9D9D9"
          />
        )}
      />
    </View>
  );
};

export default NutritionInfo;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF7B8",
    flex: 1,
    padding: 2,
  },
});
