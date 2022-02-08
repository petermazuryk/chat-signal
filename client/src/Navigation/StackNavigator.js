import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MessageScreen from "../Screens/MessageScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerMode: "none",
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerMode: "none",
        }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          headerMode: "Chat",
        }}
        name="MessageScreen"
        component={MessageScreen}
      />
      <Stack.Screen
        options={{
          headerMode: "none",
        }}
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
