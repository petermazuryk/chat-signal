import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { ActiveUserData } from "./Data.js";
import { Avatar } from "react-native-elements";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
// console.log(ActiveUserData);
const ActiveUser = () => {
  return (
    <View>
      <SearchBar
        // onChangeText={(text) => onChangeHandler(text)}
        // value={search}
        placeholder="Search People"
        inputContainerStyle={{ backgroundColor: "white", elevation: 5 }}
      />

      <FlatList
        data={ActiveUserData}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri: item.image,
              }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ActiveUser;

const styles = StyleSheet.create({});
