import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
const ProfileScreen = () => {
  const nav = useNavigation();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    nav.navigate("LoginScreen" as never);
  };
  return (
    <View style={[styles.root]}>
      <Text>ProfileScreen</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
