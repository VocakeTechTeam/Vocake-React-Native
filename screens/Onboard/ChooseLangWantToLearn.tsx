import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
type Props = {
  handleStep: () => void;
};
type ChoiceProps = {
  name: string;
  isActive: boolean;
};
const ChooseLangWantToLearn = ({ handleStep }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const choies: ChoiceProps[] = [
    { name: "🇺🇸 English", isActive: true },
    { name: "🇫🇮 Finnish", isActive: false },
  ];
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    handleStep();
  };
  return (
    <View style={[styles.root]}>
      <Text style={styles.header}>What language do you want to learn?</Text>
      {choies.map((item, index) => {
        let isSelected = false;
        if (item.name === selectedItem) {
          isSelected = true;
        }
        return (
          <SelectBox
            key={index}
            handleClick={handleSelect}
            name={item.name}
            isSelected={isSelected}
            isActive={item.isActive}
          />
        );
      })}
    </View>
  );
};

export default ChooseLangWantToLearn;

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
