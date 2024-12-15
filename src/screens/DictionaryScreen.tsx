import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
const DictionaryScreen = () => {
  return (
    <View style={[styles.root]}>
      <View>
        <Text>Ironic (.a)</Text>
      </View>
      <TouchableOpacity>
        <FontAwesome name="volume-up" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Feather name="list" size={24} color="black" />
        <Text>Add to list</Text>
      </TouchableOpacity>
      <View>
        <Text>Intermediate</Text>
      </View>
      <View>
        <Text>Unexpected thus funny</Text>
      </View>
      <View>
        <Text>
          It’s ironic that Sarah, the librarian, got fined for overdue books."
        </Text>
        <Text>
          "Thật trớ trêu khi Sarah, thủ thư, lại bị phạt vì mượn sách quá hạn."
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text>Quick Practice</Text>
        <TextInput
          multiline
          numberOfLines={4}
          style={{
            height: 100,
            borderWidth: 1,
            borderRadius: 10,
            width: "100%",
            padding: 10,
          }}
        />
        <TouchableOpacity>
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DictionaryScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 10,
    display: "flex",
    alignItems: "flex-start",
  },
});
