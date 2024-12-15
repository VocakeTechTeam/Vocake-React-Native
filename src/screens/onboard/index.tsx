import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import ProgressBar from "../../components/ProgressBar"; // Ensure this path is correct or update it to the correct path
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ChooseYourNativeLanguage from "./ChooseYourNativeLanguage";
import ChooseLangWantToLearn from "./ChooseLangWantToLearn";
import WhyBetterEnglish from "./WhyBetterEnglish";
import ChooseInterestedTopic from "./ChooseInterestedTopic";
import TopicReassure from "./TopicReassure";
import ChooseMainChallenge from "./ChooseMainChallenge";
import ChallengeReassure from "./ChallengeReassure";
import RateEnglish from "./RateEnglish";
import ChooseWhereToImp from "./ChooseWhereToImp";
import HowOften from "./HowOften";
import { useAuth } from "../../context/AuthContext";
const Onboard = () => {
  const { fakeLogIn } = useAuth();
  const [step, setStep] = useState<number>(1);
  const [challenge, setChallenge] = useState<string>("");

  const nav = useNavigation();
  useEffect(() => {
    if (step === totalStep + 1) {
      fakeLogIn();
      nav.navigate("HomeTab" as never);
    }
  }, [step]);

  const handleStep = () => {
    if (step <= totalStep) {
      setStep(step + 1);
    }
  };
  const handleStepBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleChallenge = (challenge: string) => {
    setChallenge(challenge);
  };
  const arr = [
    <ChooseYourNativeLanguage handleStep={handleStep} />,
    <ChooseLangWantToLearn handleStep={handleStep} />,
    <WhyBetterEnglish handleStep={handleStep} />,
    <ChooseInterestedTopic handleStep={handleStep} />,
    <TopicReassure handleStep={handleStep} />,
    <ChooseMainChallenge handleStep={handleStep} onSelect={handleChallenge} />,
    <ChallengeReassure handleStep={handleStep} challenge={challenge} />,
    <RateEnglish handleStep={handleStep} />,
    <ChooseWhereToImp handleStep={handleStep} />,
    <HowOften handleStep={handleStep} />,
  ];
  const totalStep = arr.length;
  return (
    <View style={[styles.root]}>
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={handleStepBack}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: 20,
          }}
        >
          <ProgressBar
            currentStep={step}
            totalStep={totalStep}
            backgroundColor="#55AD9B"
          />
        </View>
        <Text>
          {step}/{totalStep}
        </Text>
      </View>
      <View style={[styles.main]}>{arr[step - 1]}</View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 10,
  },
  main: {
    height: "80%",
    width: "100%",
  },
});
