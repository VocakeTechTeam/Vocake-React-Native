import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  handleStep: () => void;
  challenge: string;
};
const ChallengeReassure = ({ handleStep, challenge }: Props) => {
  const reassure = {
    time: (
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Time is precious, and that's why Vocake lessons average just 5 minutes
          long!
        </Text>
        <Text style={{ marginTop: 10 }}>
          You can pause any time, and when you're ready to restart, it's super
          easy to pick up from right where you left off!
        </Text>
      </View>
    ),
    motivation: (
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          We all find it hard to stay motivated sometimes! 😓
        </Text>
        <Text style={{ marginTop: 10 }}>
          We have fun monthly challenges with prizes, smart methods to review,
          and great ways to track your progress.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Most importantly, our lessons are designed to keep you interested!
        </Text>
      </View>
    ),
    remember: (
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Why learn something if you can't remember it? 😬
        </Text>
        <Text style={{ marginTop: 10 }}>
          At Vocake, we've built a proven method that will not only help you to
          learn new words and concepts, but to also remember them down the road!
        </Text>
      </View>
    ),
    difficult: (
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Vocake is designed for learners of all skill levels!
        </Text>
        <Text style={{ marginTop: 10 }}>
          Our thousands of lessons cover all experiences and topics. We make
          sure our content is relevant and that concepts are explained clearly
          for you!
        </Text>
        <Text style={{ marginTop: 10 }}>
          You are capable of it, and it WILL be fun and rewarding!
        </Text>
      </View>
    ),
  };
  const reassureChallengeMapping: Record<string, keyof typeof reassure> = {
    "⏰ It's hard to find time": "time",
    "🚀 It's hard to stay motivated": "motivation",
    "🧠 Remembering what I learned": "remember",
    "😔 English might be too hard": "difficult",
  };
  return (
    <View style={[styles.root]}>
      <View style={[styles.reassure]}>
        {reassure[reassureChallengeMapping[challenge]]}
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleStep}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChallengeReassure;

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
  reassure: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "100%",
    height: 500,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    elevation: 5, // For Android shadow
    shadowColor: "rgba(99, 99, 99, 0.2)", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 1, // iOS shadow opacity
    shadowRadius: 8, // iOS shadow radius
  },
});
