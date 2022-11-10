import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Components/GenericScreens/Auth/Login.screen";
import RegisterScreen from "../Components/GenericScreens/Auth/Register.screen";
import MyStatusBar from "../Components/MyStatusBar";

// ==============================================================

const Stack = createNativeStackNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Login",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

export default function UnAuthorizedNavigator() {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
}
