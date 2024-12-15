import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useContext } from "react";
import { apiClient } from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AUTHTYPE = {
  isAuth: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  fakeLogIn: () => void;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    checkAuthStatus();
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post("/api/v1/login", {
        email: email,
        password: password,
        role: "CUSTOMER",
      });
      const token = response.data.payload;
      if (!token || token) {
        setIsAuth(true);
        await AsyncStorage.setItem("access_token", "token");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    AsyncStorage.removeItem("userToken");
    setIsAuth(false);
  };
  const fakeLogIn = () => {
    setIsAuth(true);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, fakeLogIn }}>
      {loading ? <ActivityIndicator style={{ top: "50%" }} /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Auth Context must be initialized");
  }
  return context;
};
