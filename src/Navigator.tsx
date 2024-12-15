import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Onboard from "./screens/onboard";
import DictionaryScreen from "./screens/DictionaryScreen";
import { useAuth } from "./context/AuthContext";
import VerificationScreen from "./screens/VerificationScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="Dictionary"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="notebook" size={24} color="black" />
          ),
        }}
        component={DictionaryScreen}
      />
      <Tab.Screen
        name="My List"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="category" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Explore"
        options={{
          tabBarIcon: () => <Feather name="globe" size={24} color="black" />,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings-sharp" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  const { isAuth } = useAuth();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="Verification"
        component={VerificationScreen}
      /> */}
      {!isAuth ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboard"
            component={Onboard}
          />
        </>
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeTab"
          component={BottomTabNavigator}
        />
      )}
    </Stack.Navigator>
  );
};
