import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
type Props = {
  handleStep: () => void;
  onSelect: (challenge: string) => void;
};

const ChooseMainChallenge = ({ handleStep, onSelect }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const choices = [
    "⏰ It's hard to find time",
    "🚀 It's hard to stay motivated",
    "🧠 Remembering what I learned",
    "😔 English might be too hard",
  ];
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>
        What is the main challenge for you in learning English?
      </Text>
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

export default ChooseMainChallenge;

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
