import { Navigator } from "./src/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
