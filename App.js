import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './app/Screens/HomeScreen'
import TransportScreen from './app/Screens/TransportScreen'
import ProfileScreen from './app/Screens/ProfileScreen';
import CalendarScreen from './app/Screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  useFonts({
    'mainFont': require('./app/assets/MainFont.ttf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={({ navigation }) => {
            // Hämta den senaste skärmen som användaren var på 
            const lastRoute = navigation.getState().routes[navigation.getState().index - 1];

            let animation = 'default'; // Standard animation
            if (lastRoute && lastRoute.name === 'Profile') {
              animation = 'slide_from_left'; // Kommer från Profile, glid från vänster
            } else if (lastRoute && lastRoute.name === 'Calendar') {
              animation = 'slide_from_right'; // Kommer från Calendar, glid från höger
            }

            return {
              headerShown: false, 
              animation: animation, //baserat på den senaste skärmen
            };
          }} 
          />
        <Stack.Screen
          name="Transport" 
          component={TransportScreen}
          options={{ headerShown: false }} 
          />
        <Stack.Screen
          name="Profile" 
          component={ProfileScreen}
          options={{ headerShown: false,
            animation: 'slide_from_right',
          }} 
          />
        <Stack.Screen
          name="Calendar" 
          component={CalendarScreen}
          options={{ headerShown: false,
            animation: 'slide_from_left',
           }} 
          />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;


