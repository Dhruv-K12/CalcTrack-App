import { RootMainStackParamList } from "@/app/App";
import FoodItem from "@/components/FoodItem";
import { getMealData } from "@/Foodapi";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
type props = {
  navigation: NativeStackNavigationProp<
    RootMainStackParamList,
    "Search"
  >;
};
const Search = ({ navigation }: props) => {
  const [foodData, setFoodData] = useState<any>();
  return (
    <LinearGradient
      colors={["#F6E988", "#EFDA3E"]}
      locations={[0, 0.2]}
      style={{ flex: 1 }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TextInput
            onChangeText={(value) =>
              getMealData(value, setFoodData)
            }
            placeholder="What You Ate Today?"
            style={styles.searchBar}
          />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => navigation.goBack()}
          >
            <AntDesign
              name="closecircle"
              size={30}
              color="grey"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={foodData}
        renderItem={({ item }) => (
          <FoodItem
            name={item.food_name}
            uri={item.photo.thumb}
          />
        )}
      />
    </LinearGradient>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  mainContainer: {
    alignItems: "center",
    padding: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  closeBtn: {
    margin: 10,
  },
});
