import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import logo from "../assets/image1.png";
import googleLogo from "../assets/google.png";
import AntDesign from "@expo/vector-icons/AntDesign";
const LoginScreen = () => {
  return (
    <View style={[styles.root]}>
      <Image source={logo} style={[styles.imgae]} />
      <Text style={[styles.title, { color: "#55AD9B" }]}>
        Welcome to{" "}
        <Text style={[styles.title, { color: "#FC5A78" }]}>Vocake</Text>!
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
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.forgotText]}>
          Forgot password?{" "}
          <TouchableOpacity>
            <Text style={[styles.clickHereText]}>Click here</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={[styles.loginContainer]}>
          <Text style={[styles.loginText]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signInGGContainer]}>
          <Image source={googleLogo} style={[styles.googleLogo]} />
          <Text>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imgae: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "medium",
    fontSize: 30,
    margin: 10,
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
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
  loginContainer: {
    borderRadius: 20,
    backgroundColor: "#FCBC05",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  signInGGContainer: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    borderColor: "gray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  forgotText: {
    marginTop: 10,
  },
  clickHereText: { color: "#C2A226", fontWeight: "bold" },
  googleLogo: {
    height: 20,
    width: 20,
  },
});
