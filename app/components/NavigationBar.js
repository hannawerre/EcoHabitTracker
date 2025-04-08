import React, { act } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar({ active }) {
// Import the useNavigation hook from React Navigation
  const navigation = useNavigation();

  return (
    // Create a bottom navigation bar with three icons: Calendar, Home, and Profile
    <View style={styles.container}>
        
      <TouchableOpacity
        // Navigate to the Calendar screen when the icon is pressed
        onPress={() => navigation.navigate('Calendar')}

        style={[styles.iconWrapper, active === 'Calendar' && styles.active]}>
        {/* Use FontAwesome icon for Calendar and base color if active or not*/}
        <FontAwesome name="calendar" size={28} color={active === 'Calendar' ? '#6cdbaeff' : "#555"}/>
      </TouchableOpacity>

      <TouchableOpacity
        // Navigate to the Home screen when the icon is pressed
        onPress={() => navigation.navigate('Home')}
        style={[styles.iconWrapper, active === 'Home' && styles.active]}
      >
        {/* Use FontAwesome icon for Home and base color if active or not*/}
        <FontAwesome name="home" size={28} color={active === 'Home' ? '#6cdbaeff' : "#555"}/>
      </TouchableOpacity>

      <TouchableOpacity
        // Navigate to the Profile screen when the icon is pressed
        onPress={() => navigation.navigate('Profile')}
        style={[styles.iconWrapper, active === 'Profile' && styles.active]}
      >
        {/* Use FontAwesome icon for Profile and base color if active or not*/}
        <FontAwesome name="user" size={28} color={active === 'Profile' ? '#6cdbaeff' : "#555"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    // StyleSheet for the Bottom Navigation Bar
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFCEB',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  // StyleSheet for the individual icon wrappers
  iconWrapper: {
    padding: 10,
    borderRadius: 15,
  },
    // StyleSheet for the active icon
  active: {
    backgroundColor: '#fff7c8',
  },
});
