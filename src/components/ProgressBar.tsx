import { StyleSheet, Text, View } from "react-native";
import React from "react";
type Props = {
  totalStep: number;
  currentStep: number;
  backgroundColor?: string;
};

const ProgressBar = ({
  totalStep,
  currentStep,
  backgroundColor = "#EAB355",
}: Props) => {
  const width = (100 / totalStep) * currentStep;
  return (
    <View style={[styles.root]}>
      <View
        style={{
          width: `${width}%`,
          backgroundColor: backgroundColor,
          height: "100%",
          borderRadius: 25,
        }}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    borderRadius: 100,
    height: "100%",
    shadowColor: "rgba(99, 99, 99, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    backgroundColor: "white",
  },
});
