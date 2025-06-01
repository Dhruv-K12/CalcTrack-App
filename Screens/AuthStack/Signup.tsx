import { rootStackParamList } from "@/app/App";
import { verifyEmailAndPassword } from "@/authentication";
import AuthBtn from "@/components/AuthBtn";
import AuthInput from "@/components/AuthInput";
import BackBtn from "@/components/backBtn";
import Loading from "@/components/Loading";
import { useMainCtx } from "@/MainContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from "react-native";
type props = {
  navigation: NativeStackNavigationProp<
    rootStackParamList,
    "Signup"
  >;
};
const Signup = ({ navigation }: props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { loading, setLoading } = useMainCtx();
  const verifyName = () => {
    if (name.trim().length !== 0) {
      verifyEmailAndPassword(email, pass, setLoading, name);
    } else {
      Alert.alert(
        "Invalid Name",
        "Name field should contain at least one letter "
      );
    }
  };
  if (loading) {
    return <Loading />;
  }
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
        <Text style={styles.headText}>Signup</Text>
        <Text style={styles.desText}>
          Enter your name, email and password to register
          your account
        </Text>
      </View>
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <AuthInput
          placeholder="Enter Your Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
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
        <AuthBtn onPress={verifyName} color="#87FE80">
          Signup
        </AuthBtn>
      </View>
    </LinearGradient>
  );
};

export default Signup;

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
