import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectBox from "./components/SelectBox";

type Props = {
  handleStep: () => void;
};
const HowOften = ({ handleStep }: Props) => {
  const choices = [
    "A few minutes a day",
    "A few times each day",
    "A few times each month",
    "I cant commit right now",
  ];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>
        How often do you want to practice English?
      </Text>
      {choices.map((item, index) => {
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

export default HowOften;

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
