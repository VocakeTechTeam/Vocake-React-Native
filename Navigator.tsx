import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Onboard from "./screens/Onboard";
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
        name="Word"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="notebook" size={24} color="black" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="category" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Community"
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
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeTab"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Onboard"
        component={Onboard}
      />
    </Stack.Navigator>
  );
};
