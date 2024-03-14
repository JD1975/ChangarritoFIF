import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import StackScreen from '../screens/StackScreen';

const Stack = createStackNavigator();

function MyScreens()  {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />

        
      </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyScreens />
    </NavigationContainer>
  );
}
