import { rootStackParamList } from "@/app/App";
import { verifyEmailAndPassword } from "@/authentication";
import AuthBtn from "@/components/AuthBtn";
import AuthInput from "@/components/AuthInput";
import BackBtn from "@/components/backBtn";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type props = {
  navigation: NativeStackNavigationProp<
    rootStackParamList,
    "Login"
  >;
};
const Login = ({ navigation }: props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <LinearGradient
      colors={["#AEAEAE", "#E4CF30"]}
      style={{ flex: 1 }}
      locations={[0.1, 1]}
      start={{ x: 2.2, y: 0 }}
    >
      <BackBtn onPress={() => navigation.goBack()} />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={styles.headText}>Login</Text>
        <Text style={styles.desText}>
          Enter your email and password to login your
          account
        </Text>
      </View>
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <AuthInput
          placeholder="Enter Your Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <AuthInput
          placeholder="Enter Your Password"
          onChangeText={(text) => setPass(text)}
          value={pass}
          secureTextEntry={true}
          password={true}
        />
        <AuthBtn
          onPress={() =>
            verifyEmailAndPassword(email, pass)
          }
          color="#C54A4C"
        >
          Login
        </AuthBtn>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontFamily: "inter-bold",
  },
  desText: {
    fontSize: 18,
    fontStyle: "italic",
  },
});
