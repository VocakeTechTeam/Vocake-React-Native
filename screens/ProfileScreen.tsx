import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const nav = useNavigation();
  return (
    <View style={[styles.root]}>
      <Text>ProfileScreen</Text>
      <Button
        title="Log out"
        onPress={() => {
          nav.navigate("LoginScreen" as never);
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
