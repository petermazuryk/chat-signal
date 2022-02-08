import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ActiveUserData } from "./Data";
import { ListItem, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Recent = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 25,
              // fontFamily: "Nexa Bold",
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          >
            Recent
          </Text>
        )}
        data={ActiveUserData}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({});

const RenderItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MessageScreen")}>
      <ListItem>
        <Avatar title={item.name} rounded source={{ uri: item.image }} />

        <ListItem.Content>
          <ListItem.Title> {item.name} </ListItem.Title>
          <Text
          // style={{ fontFamily: "FRABK" }}
          >
            hello how are you?
          </Text>
        </ListItem.Content>
        <Text>4.00 pm</Text>
      </ListItem>
    </TouchableOpacity>
  );
};
