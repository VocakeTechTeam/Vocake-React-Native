import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  handleStep: () => void;
};

const TopicReassure = ({ handleStep }: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.reassure}>
        <Text style={styles.reassureText}>
          👍 Great, we'll make sure to cover some of these topics!
        </Text>
      </View>
      <TouchableOpacity onPress={handleStep} style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopicReassure;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "#55AD9B",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    fontWeight: "bold",
    color: "white",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // For Android shadow
    shadowColor: "rgba(99, 99, 99, 0.2)", // iOS shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  reassure: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "100%",
    height: 500,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    elevation: 5, // For Android shadow
    shadowColor: "rgba(99, 99, 99, 0.2)", // iOS shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  reassureText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
