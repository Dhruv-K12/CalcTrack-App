import { RootMainStackParamList } from "@/app/App";
import { getMealNutrients } from "@/Foodapi";
import { useMainCtx } from "@/MainContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

type props = {
  name: string;
  uri: string;
};
type navigation = NativeStackNavigationProp<
  RootMainStackParamList,
  "Search"
>;
const FoodItem = ({ name, uri }: props) => {
  const navigation = useNavigation<navigation>();
  const { setItems } = useMainCtx();
  const addItemHandler = () => {
    getMealNutrients(name, setItems);
    ToastAndroid.show("Item added", ToastAndroid.SHORT);
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: uri }} style={styles.img} />
      <Text>{name}</Text>
      <TouchableOpacity onPress={addItemHandler}>
        <FontAwesome6 name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    height: 80,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    width: 60,
    height: 60,
    margin: 5,
  },
});
