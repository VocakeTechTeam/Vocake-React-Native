import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@react-navigation/stack"; // Make sure to import the right header component

const DictionaryScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TextInput placeholder="Search" style={styles.searchBar} />
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <Text style={styles.word}>Ironic (.a)</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="volume-up" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToListButton}>
          <Feather name="list" size={24} color="black" />
          <Text style={styles.addToListText}>Add to list</Text>
        </TouchableOpacity>

        <Text style={styles.level}>Intermediate</Text>
        <Text style={styles.definition}>Unexpected thus funny</Text>
        <Text style={styles.example}>
          "It’s ironic that Sarah, the librarian, got fined for overdue books."
        </Text>
        <Text style={styles.example}>
          "Thật trớ trêu khi Sarah, thủ thư, lại bị phạt vì mượn sách quá hạn."
        </Text>

        <View style={styles.practiceContainer}>
          <Text style={styles.practiceTitle}>Quick Practice</Text>
          <TextInput multiline numberOfLines={4} style={styles.textInput} />
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DictionaryScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchBar: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  searchIcon: {
    marginRight: 16,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  iconButton: {
    marginBottom: 12,
  },
  addToListButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  addToListText: {
    fontSize: 16,
  },
  level: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  definition: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 12,
  },
  example: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
  practiceContainer: {
    width: "100%",
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  textInput: {
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    marginBottom: 12,
    textAlignVertical: "top",
  },
  checkButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  checkButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
