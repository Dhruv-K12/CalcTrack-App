import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export const getMealData = async (
  query: string,
  setFoodData: React.Dispatch<React.SetStateAction<any>>
) => {
  const response = await axios.get(
    `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
    {
      headers: {
        "x-app-id": "28ea9cab",
        "x-app-key": "2accb365984f1cabc138b8fd08d33f63",
      },
    }
  );
  setFoodData(response.data.common);
};

export const getMealNutrients = async (
  query: string,
  setItems: React.Dispatch<React.SetStateAction<any>>
) => {
  const respone = await axios.post(
    `https://trackapi.nutritionix.com/v2/natural/nutrients`,
    { query },
    {
      headers: {
        "x-app-id": "28ea9cab",
        "x-app-key": "2accb365984f1cabc138b8fd08d33f63",
      },
    }
  );
  setItems((prevItems: any) => [
    ...prevItems,
    {
      ...respone.data.foods[0],
      totalCalories: Number(
        respone.data.foods[0].nf_calories
      ),
      serving_qty: 1,
    },
  ]);
};
export const saveItems = async (items: any) => {
  await AsyncStorage.setItem(
    "items",
    JSON.stringify(items)
  );
};

export const getItems = async (
  setItems: React.Dispatch<React.SetStateAction<any>>,
  setTotalCalories: React.Dispatch<
    React.SetStateAction<number | null>
  >
) => {
  const items = await AsyncStorage.getItem("items");
  if (items != null) {
    setItems(JSON.parse(items));
  }
  const totalCalories = await AsyncStorage.getItem(
    "total calories"
  );
  if (totalCalories != null) {
    setTotalCalories(Number(totalCalories));
  }
};
export const getDay = async () => {
  const date = new Date().toDateString();
  const getLastDate = await AsyncStorage.getItem("date");
  if (getLastDate !== null) {
    if (date !== getLastDate) {
      console.log(date, getLastDate);
      await AsyncStorage.setItem("date", date);
      await AsyncStorage.removeItem("items");
    }
  } else {
    await AsyncStorage.setItem("date", date);
  }
};
