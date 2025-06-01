import { logoutHandler } from "@/authentication";
import { useMainCtx } from "@/MainContext";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  const { setUser } = useMainCtx();
  return (
    <LinearGradient
      colors={["#F6E988", "#EFDA3E"]}
      locations={[0, 0.1]}
      style={{ flex: 1 }}
    >
      <Text style={{ alignSelf: "center", fontSize: 20 }}>
        This App is Under Development
      </Text>
      <TouchableOpacity
        onPress={() => logoutHandler(setUser)}
        style={{
          width: 170,
          backgroundColor: "red",
          height: 40,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Text style={{ color: "white" }}>LogOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({});
