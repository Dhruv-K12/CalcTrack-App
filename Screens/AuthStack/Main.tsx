import { rootStackParamList } from "@/app/App";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type props = {
  navigation: NativeStackNavigationProp<
    rootStackParamList,
    "Main"
  >;
};
const Main = ({ navigation }: props) => {
  return (
    <LinearGradient
      colors={["#E4CF30", "#918103"]}
      locations={[0.65, 1]}
      start={{ x: 0.1, y: 0.8 }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/The_Fruit_Basket_About_-_Basket_Of_Fruits_PNG_Transparent_With_Clear_Background_ID_185526___TopPNG-removebg-preview.png")}
        />
        <Text style={styles.headText}>
          Welcome To {"\n"}CalTrack App
        </Text>
        <Text style={styles.desText}>
          CalcTrack is a modern and intuitive calorie
          tracking app designed to help you take control of
          your health and nutrition. Whether you're aiming
          to lose weight, gain muscle, or simply maintain a
          balanced lifestyle, CalcTrack makes tracking your
          daily intake effortless and insightful.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text>Get Started</Text>
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.logBtn}
        >
          <Text style={styles.logBtnTxt}>
            Already have an account?
          </Text>
          <Text
            style={[
              styles.logBtnTxt,
              { textDecorationLine: "underline" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Main;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    marginTop: 50,
    alignSelf: "center",
  },
  headText: {
    color: "white",
    fontSize: 30,
    margin: 5,
    fontFamily: "inter-bold",
    alignSelf: "flex-start",
  },
  desText: {
    color: "white",
    margin: 10,
    fontFamily: "Hold-wood",
  },
  btn: {
    width: "94%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#CFC665",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 0.4,
    elevation: 10,
  },
  logBtn: {
    flexDirection: "row",
    alignSelf: "center",

    padding: 10,
  },
  logBtnTxt: {
    color: "white",
  },
});
