import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectBox from "./components/SelectBox";
type Props = {
  handleStep: () => void;
};

const Age = ({ handleStep }: Props) => {
  const choices = [
    "Under 10 years old",
    "Between 10 and 20 years old",
    "Between 21 and 25 years old",
    "Between 26 and 35 years old",
    "Between 36 and 45 years old",
    "Between 46 and 55 years old",
    "56 years old or older",
  ];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>How old are you</Text>
      {choices.map((item, index) => {
        let isSelected = false;
        if (item == selectedItem) {
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

export default Age;

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
    flex: 1,
  },
});
