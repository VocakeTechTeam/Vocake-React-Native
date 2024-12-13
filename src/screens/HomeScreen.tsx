import { StyleSheet, View } from "react-native";
import React from "react";
import logo from "../../assets/image1.png";
import { Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={[styles.root]}>
      <Image source={logo} style={[styles.imgae]} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  imgae: {
    width: 100,
    height: 100,
  },
});
