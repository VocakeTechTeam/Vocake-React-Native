import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectBox from "./components/SelectBox";
import { TouchableOpacity } from "react-native";
type Props = {
  handleStep: () => void;
};
const ChooseYourNativeLanguage = ({ handleStep }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const choies = [
    "Korean",
    "Japanese",
    "Chinese",
    "Spanish",
    "German",
    "French",
    "Portuguese",
    "Polish",
    "Vietnamese",
  ];
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>Choose Your Native Language</Text>
      {choies.map((item, index) => {
        let isSelected = false;
        if (item === selectedItem) {
          isSelected = true;
        }
        return (
          <SelectBox
            key={index}
            handleClick={handleSelect}
            name={item}
            isSelected={isSelected}
            isActive={true}
          />
        );
      })}
    </View>
  );
};

export default ChooseYourNativeLanguage;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    lineHeight: 40,
    marginVertical: 10,
    textAlign: "center",
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
});
