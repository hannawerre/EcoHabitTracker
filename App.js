import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/Screens/HomeScreen'
import TransportScreen from './app/Screens/TransportScreen'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }} 
          />
        <Stack.Screen
          name="Transport" 
          component={TransportScreen}
          options={{ headerShown: false }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;


