import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next'; // Assuming you're using i18next for translations
import { useSettings } from '../../hooks/useSettings'; // Custom hook for handling settings

const SettingsScreen = () => {
  const { t } = useTranslation(); // Translation function
  const { getCurrentEmail, setLanguageLocale } = useSettings(); // Hook to manage settings
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmail = async () => {
      const currentEmail = await getCurrentEmail();
      setEmail(currentEmail);
      setLoading(false);
    };
    fetchEmail();
  }, []);

  const handleLanguagePress = async () => {
    // Function to show language selection bottom sheet
    const selectedLanguage = await showLanguageBottomSheet(); // Implement this function
    if (selectedLanguage) {
      setLanguageLocale(selectedLanguage);
    }
  };

  const handleSocialMediaPress = async () => {
    // Function to show social media bottom sheet
    await showSocialMediaBottomSheet(); // Implement this function
  };

  const handleColorMediaPress = async () => {
    // Function to show color media bottom sheet
    await showColorMediaBottomSheet(); // Implement this function
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>{t('settingBottomNavBar')}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ProfileItem email={email} />
        )}
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{t('chooseYourLanguage')}</Text>
          <TouchableOpacity onPress={handleLanguagePress} style={styles.button}>
            <Text style={styles.buttonText}>{t('currentLanguageWithFlag')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{t('socialmedia')}</Text>
          <TouchableOpacity onPress={handleSocialMediaPress} style={styles.button}>
            <Text style={styles.buttonText}>{t('socialmedia')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{t('socialmedia')}</Text>
          <TouchableOpacity onPress={handleColorMediaPress} style={styles.button}>
            <Text style={styles.buttonText}>{t('socialmedia')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  appBar: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee',
  },
  appBarTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  listItemTitle: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsScreen;

// Note: ProfileItem and showLanguageBottomSheet, showSocialMediaBottomSheet, showColorMediaBottomSheet need to be defined in your codebase.
