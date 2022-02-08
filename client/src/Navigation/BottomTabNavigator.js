import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Profilescreen from "../Screens/ProfileScreen";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Chat",
          tabBarIcon: () => (
            <FontAwesome5 name="rocketchat" size={22} color="blue" />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "profile",
          tabBarIcon: () => (
            <FontAwesome name="user-secret" size={24} color="black" />
          ),
        }}
        name="Profilescreen"
        component={Profilescreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
