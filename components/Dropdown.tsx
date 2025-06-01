import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type goalItem = {
  label: string;
  value: string;
};
type props = {
  Items: goalItem[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};
const Dropdown = ({
  Items,
  value,
  setValue,
  placeholder,
}: props) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      open={open}
      setOpen={(state) => setOpen(state)}
      value={value}
      items={Items}
      setValue={setValue}
      style={{
        width: "90%",
        marginVertical: 40,
        marginHorizontal: 10,
      }}
      placeholder={placeholder}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
