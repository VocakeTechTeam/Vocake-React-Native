import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VerificationModal from "../components/VerificationModal";

const VerificationScreen = () => {
  return (
    <View style={styles.root}>
      <VerificationModal />
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
