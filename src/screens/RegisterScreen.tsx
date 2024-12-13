import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import logo from "../../assets/IMG_1572 2.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const nav = useNavigation();
  return (
    <View style={[styles.root]}>
      <Image source={logo} style={[styles.imgae]} />
      <Text style={[styles.title, { color: "#55AD9B" }]}>
        Create an{" "}
        <Text style={[styles.title, { color: "#FC5A78" }]}>account!</Text>
      </Text>
      <View style={[styles.container]}>
        <View style={[styles.inptutContainer]}>
          <TextInput
            style={[styles.input]}
            placeholder="Email"
            placeholderTextColor="gray"
          />
          <AntDesign name="mail" size={18} color="gray" />
        </View>
        <View style={[styles.inptutContainer]}>
          <TextInput
            style={[styles.input]}
            placeholder="Password"
            placeholderTextColor="gray"
          />
          <AntDesign name="lock" size={18} color="gray" />
        </View>
        <View style={[styles.inptutContainer]}>
          <TextInput
            style={[styles.input]}
            placeholder="Confirm your password"
            placeholderTextColor="gray"
          />
          <AntDesign name="lock" size={18} color="gray" />
        </View>
      </View>
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Onboard" as never);
          }}
          style={[styles.signUpContainer]}
        >
          <Text style={[styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signUpContainer]}
          onPress={() => {
            nav.navigate("LoginScreen" as never);
          }}
        >
          <Text style={[styles.signUpText]}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 20,
  },
  title: {
    fontWeight: "medium",
    fontSize: 30,
    margin: 10,
  },
  imgae: {
    width: 100,
    height: 100,
  },
  input: { flex: 1 },
  inptutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F1F1F1",
    height: 40,
  },
  container: {
    width: "90%",
    gap: 20,
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
  },
  signUpContainer: {
    borderRadius: 20,
    backgroundColor: "#55AD9B",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
});
