import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { ActiveUserData } from "./Data.js";
import { Avatar } from "react-native-elements";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import ActiveUser from "./ActiveUsers.js";
import Recent from "./Recent.js";
// console.log(ActiveUserData);
const HomeScreen = () => {
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={() => <ActiveUser />}
      ListFooterComponent={() => <Recent />}
    />
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
