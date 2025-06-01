import { RootMainStackParamList } from "@/app/App";
import AddedItem from "@/components/AddedItem";
import Analysis from "@/components/Analysis";
import CatoBtn from "@/components/CatoBtn";
import { getDay, saveItems } from "@/Foodapi";
import { useMainCtx } from "@/MainContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Home = () => {
  type NavigationProp =
    NativeStackNavigationProp<RootMainStackParamList>;
  const { user, items, setAteCalories } = useMainCtx();

  useEffect(() => {
    getDay();
    const eatedCalories = items.reduce(
      (prev: any, curr: any) =>
        prev + Number(curr.totalCalories),
      0
    );
    setAteCalories(eatedCalories);
    saveItems(items);
  }, [items]);
  const navigation = useNavigation<NavigationProp>();
  const data = [
    {
      name: "Protien",
      img: require("../../assets/images/Protien.png"),
    },
    {
      name: "Low Carbs",
      img: require("../../assets/images/carbs.png"),
    },
    {
      name: "calorie",
      img: require("../../assets/images/calorie.png"),
    },
    {
      name: "Fats",
      img: require("../../assets/images/fats.png"),
    },
  ];
  return (
    <LinearGradient
      colors={["#F6E988", "#EFDA3E"]}
      locations={[0, 0.1]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text style={styles.topTxt}>
            Hey {user?.displayName}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.searchBtn}
          >
            <AntDesign
              name="search1"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Analysis />

        <View style={{ alignItems: "center" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <CatoBtn src={item.img} onPress={() => {}}>
                {item.name}
              </CatoBtn>
            )}
          />
        </View>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <AddedItem
              name={item.food_name}
              uri={item.photo.thumb}
              cal={item.totalCalories}
              qty={item.serving_qty}
              details={item}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    alignItems: "center",
    padding: 5,
  },
  searchBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#999579",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  topTxt: {
    fontSize: 17,
  },
});
