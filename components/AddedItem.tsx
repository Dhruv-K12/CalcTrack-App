import { RootMainStackParamList } from "@/app/App";
import { useMainCtx } from "@/MainContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  BounceInUp,
} from "react-native-reanimated";
type props = {
  uri: string;
  name: string;
  cal: string;
  qty: string;
  details: any[];
};
type navigation =
  NativeStackNavigationProp<RootMainStackParamList>;

const AddedItem = ({
  uri,
  name,
  cal,
  qty,
  details,
}: props) => {
  const [quantity, setQty] = useState(Number(qty));
  useEffect(() => {
    if (quantity <= 0) {
      ctx?.setItems((items: any) =>
        items.filter(
          (each: any) => each.food_name !== name && each
        )
      );
    }
  }, [qty]);
  const ctx = useMainCtx();
  const addQuantityHandler = () => {
    ctx?.setItems((items: any) =>
      items.map((each: any) =>
        each.food_name == name
          ? {
              ...each,
              serving_qty: quantity + 1,
              totalCalories: (
                each.nf_calories *
                (quantity + 1)
              ).toFixed(2),
            }
          : each
      )
    );
    setQty((qty) => qty + 1);
  };
  const decreaseQuantityHandler = () => {
    ctx?.setItems((items: any) =>
      items.map((each: any) =>
        each.food_name === name
          ? {
              ...each,
              serving_qty: quantity - 1,
              totalCalories: (
                each.nf_calories *
                (quantity - 1)
              ).toFixed(2),
            }
          : each
      )
    );
    setQty((qty) => qty - 1);
  };
  const navigation = useNavigation<navigation>();
  return (
    <Animated.View entering={BounceInUp}>
      <Pressable
        onPress={() =>
          navigation.navigate("NutritionInfo", { details })
        }
        style={styles.mainContainer}
      >
        <Animated.Image
          sharedTransitionTag={name}
          source={{ uri: uri }}
          style={{ width: 40, height: 40 }}
        />
        <Text>{name}</Text>
        <Text>{cal}cal</Text>
        <AntDesign
          onPress={addQuantityHandler}
          name="plus"
          size={24}
          color="black"
        />
        <Text>{quantity}</Text>
        <AntDesign
          onPress={decreaseQuantityHandler}
          name="minus"
          size={24}
          color="black"
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
    alignItems: "center",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    margin: 10,
  },
});

export default AddedItem;
