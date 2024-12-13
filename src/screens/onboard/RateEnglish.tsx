import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
type Props = {
  handleStep: () => void;
};

const RateEnglish = ({ handleStep }: Props) => {
  const choices = ["Level 0", "Level 1", "Level 2", "Level 3", "Level 4"];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>How would you rate your English?</Text>
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

export default RateEnglish;

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
