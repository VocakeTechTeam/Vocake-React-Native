import { useState, ReactNode, ChangeEvent } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";

type InputProps = {
  icon: ReactNode;
  placeholder: string;
  type?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  errorMessage?: null | string;
};

export const Input = ({
  type = "text",
  icon,
  placeholder,
  handleChange,
  name,
  errorMessage = null,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          backgroundColor: "#F1F1F1",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          border: errorMessage ? "red solid 1px" : "#8c8a8a solid 1px",
          width: "s100%",
          borderRadius: "50px",
          padding: "10px",
          "& input": {
            border: "transparent",
            flex: 1,
            background: "none",
          },
          "& input:focus": {
            border: "transparent",
            background: "none",
            outline: "none",
            flex: 1,
          },
          "& ::placeholder": {
            color: errorMessage ? "red" : "",
          },
          "& svg": {
            width: "12px",
            height: "12px",
            color: errorMessage ? "red" : "",
          },
        }}
        onClick={() => {
          setIsFocus(!isFocus);
        }}
      >
        {" "}
        <TextInput
          onChangeText={handleChange}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {icon}
      </View>
      {errorMessage && (
        <Text
          style={{
            width: "100%",
            display: "flex",
            color: "red",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
