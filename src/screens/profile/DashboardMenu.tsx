import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next"; // Assuming you're using i18next for translations
import { useSettings } from "../../hooks/useSettings"; // Custom hook for settings
import ProfileItem from "./ProfileItem"; // Ensure the correct path to ProfileItem

const DashboardMenu: React.FC = () => {
  const { t } = useTranslation();
  const { getCurrentEmail } = useSettings();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchedEmail = getCurrentEmail(); // Fetch the email from the custom hook
    setEmail(fetchedEmail);
  }, [getCurrentEmail]);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/app_icon.png")} // Adjust the path as needed
          style={styles.icon}
        />
        <Text style={styles.title}>VoCake</Text>
        <Text style={styles.subtitle}>{t("makeEnglishEasy")}</Text>
      </View>
      <ProfileItem email={email} />
      {/* Add more PageListTile components here as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    backgroundColor: "#FFC470", // Adjust color as needed
    borderRadius: 8,
    paddingBottom: 16,
    paddingTop: 32,
    alignItems: "center",
  },
  icon: {
    width: 64,
    height: 64,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
});

export default DashboardMenu;
