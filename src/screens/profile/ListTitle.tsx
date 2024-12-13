// ListTile.tsx
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface ListTileProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode; // You can use an icon component from a library like react-native-vector-icons
  onPress?: () => void;
  selected?: boolean; // To indicate if it's selected
}

const ListTile: React.FC<ListTileProps> = ({
  title,
  subtitle,
  icon,
  onPress,
  selected = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, selected && styles.selected]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: '#f0f0f0', // Change to your selected color
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListTile;
