import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
import { TouchableOpacity } from "react-native";

type Props = {
  handleStep: () => void;
};

const ChooseInterestedTopic = ({ handleStep }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const choices = [
    "📌 Business",
    "🚖 Travel",
    "🎱 Entertainment",
    "👯‍♀️ Socializing",
    "🧫 Culture",
    "❤️ Dating",
    "🛒 Shopping",
    "🌭 Food",
    "🏠 Family",
  ];
  const handleSelect = (item: string) => {
    setSelectedItem((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };
  return (
    <View>
      <Text style={styles.header}>What topics are you interested in?</Text>
      <ScrollView
        style={[styles.scrollView]}
        showsVerticalScrollIndicator={false}
      >
        {choices.map((item, index) => {
          let isSelected = false;
          if (selectedItem.includes(item)) {
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
      </ScrollView>

      <TouchableOpacity style={styles.btn} onPress={handleStep}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseInterestedTopic;

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
  btn: {
    backgroundColor: "#55AD9B",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "rgba(99, 99, 99, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: "auto",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16, // You can adjust this as per your design
  },
  scrollView: {
    width: "100%",
  },
});
