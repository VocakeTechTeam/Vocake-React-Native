import React from "react";
import { View, Text, ListTile, StyleSheet } from "react-native";

interface ProfileItemProps {
  email: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ email }) => {
  return (
    <View style={styles.container}>
      <ListTile
        title="Shawrma" // Replace with the actual title you want to use
        subtitle={email}
        left={(props) => <Icon name="person" {...props} color="black" />}
        style={styles.listTile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  listTile: {
    backgroundColor: "#FFC470", // Replace with your theme color
    borderRadius: 8,
  },
});

export default ProfileItem;
