import { RootMainStackParamList } from "@/app/App";
import BackBtn from "@/components/backBtn";
import Dropdown from "@/components/Dropdown";
import QInput from "@/components/QInput";
import { useMainCtx } from "@/MainContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type navigation =
  NativeStackNavigationProp<RootMainStackParamList>;
const Questions = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const { setTotalCalories } = useMainCtx();
  const navigation = useNavigation<navigation>();
  const goalItems = [
    { label: "Gain Weight", value: "500" },
    { label: "Maintain Weight", value: "0" },
    { label: "Loose Weight", value: "-500" },
  ];
  const GenderItem = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const activityItem = [
    {
      label: "Lightly Active",
      value: "1.375",
    },
    {
      label: "Moderate Active",
      value: "1.55",
    },
    {
      label: "Very Active",
      value: "1.725",
    },
  ];
  const calculateCalories = async (bmr: number) => {
    const totalCalories =
      bmr * Number(activity) + Number(goal);
    setTotalCalories(Math.floor(totalCalories));
    await AsyncStorage.setItem(
      "total calories",
      Math.floor(totalCalories).toString()
    );
    navigation.goBack();
  };
  const validateQuestions = () => {
    if (
      !isNaN(Number(age)) &&
      !isNaN(Number(weight)) &&
      !isNaN(Number(height)) &&
      goal.trim().length !== 0 &&
      gender.trim().length !== 0 &&
      activity.trim().length !== 0
    ) {
      const bmr =
        10 * Number(weight) +
        6.25 * Number(height) -
        5 * Number(age);
      gender === "Male"
        ? calculateCalories(bmr + 5)
        : calculateCalories(bmr - 161);
    }
  };

  return (
    <LinearGradient
      colors={["#C4E94C", "#676C49"]}
      style={{ flex: 1 }}
      locations={[0.9, 0.2]}
      start={{ x: 0, y: 0 }}
    >
      <View style={{ flex: 1 }}>
        <QInput
          placeholder="Enter Your Age"
          text="In Years"
          value={age}
          onChangeText={setAge}
          maxLength={2}
        />
        <QInput
          placeholder="Enter Your Weight"
          text="In Kg"
          value={weight}
          onChangeText={setWeight}
          maxLength={5}
          width={300}
        />
        <QInput
          placeholder="Enter Your Height"
          text="In Cm"
          onChangeText={setHeight}
          maxLength={5}
          value={height}
          width={300}
        />
        <Dropdown
          Items={goalItems}
          value={goal}
          setValue={setGoal}
          placeholder="What is Your Goal?"
        />
        <Dropdown
          Items={GenderItem}
          value={gender}
          setValue={setGender}
          placeholder="Tell Me Your Gender?"
        />
        <Dropdown
          Items={activityItem}
          value={activity}
          setValue={setActivity}
          placeholder="Activity Factor?"
        />
      </View>
      <View style={{ alignSelf: "flex-end", margin: 10 }}>
        <BackBtn right onPress={validateQuestions} />
      </View>
    </LinearGradient>
  );
};

export default Questions;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "white",
    textAlign: "center",
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
    height: 50,
  },
});
