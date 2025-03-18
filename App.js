import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import icon
import { AuthContext, AuthProvider } from "./context/AuthContext";
import SignInScreen from "./screens/SignInScreen";
import ExplorerScreen from "./screens/ExplorerScreen";
import AccountScreen from "./screens/AccountScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#FF5733", // Màu icon khi tab được chọn
      tabBarInactiveTintColor: "gray",  // Màu icon khi tab không được chọn
      tabBarStyle: { backgroundColor: "white", height: 60 }, // Tùy chỉnh thanh tab
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, // Chỉnh kiểu chữ
    }}
  >
    <Tab.Screen
      name="Explorer"
      component={ExplorerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="beer" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
