import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  name: string;
  isSelected: boolean;
  handleClick: (item: string) => void;
  isActive: boolean;
};

const SelectBox = ({
  isSelected = false,
  name,
  handleClick,
  isActive = true,
}: Props) => {
  const selectedColor = "#55AD9B";

  return (
    <TouchableOpacity
      onPress={() => handleClick(name)}
      style={[
        styles.root,
        isActive ? { opacity: 1 } : { opacity: 0.5 },
        isActive ? {} : { backgroundColor: "#F5F5F7" },
        isSelected ? { borderColor: selectedColor, borderWidth: 2 } : {},
      ]}
      disabled={!isActive}
    >
      <Text
        style={[
          styles.text,
          isSelected ? { color: selectedColor } : { color: "black" },
        ]}
      >
        {name}
      </Text>
      {!isActive && <Text style={styles.comingSoonText}>Coming soon</Text>}
      {isSelected && <AntDesign name="check" size={24} color="#55AD9B" />}
    </TouchableOpacity>
  );
};

export default SelectBox;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 60,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "rgba(99, 99, 99, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  comingSoonText: {
    color: "#B0B0B0",
    fontSize: 12,
    fontStyle: "italic",
  },
});
