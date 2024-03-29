import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import StackScreen from '../screens/StackScreen';
import LoadScreen from '../screens/LoadScreen';
import RegisScreen from '../screens/RegisScreen';
import VerifyScreen from '../screens/VerifyScreen';

// Importa tu logo aquí
import LogoImage from '../assets/Logo.png';

const Stack = createStackNavigator();

function MyScreens() {
  return (
    <Stack.Navigator initialRouteName="Load">
      <Stack.Screen
        name="Load"
        component={LoadScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Regis'
        component={RegisScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
              <Image
                source={LogoImage}
                style={{ width: 35, height: 35, marginRight:5, marginStart: 30 }}
              />
              <Text style={{ color: '#030A8C', fontSize: 18, textAlign: 'center',fontWeight: 'bold', alignItems: 'center'}}>Changarrito FIF</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#030A8C',
        })}
      />
      <Stack.Screen
        name='Verify'
        component={VerifyScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
              <Image
                source={LogoImage}
                style={{ width: 35, height: 35, marginRight:5, marginStart: 30 }}
              />
              <Text style={{ color: '#030A8C', fontSize: 18, textAlign: 'center',fontWeight: 'bold', alignItems: 'center'}}>Changarrito FIF</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#030A8C',
        })}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyScreens />
    </NavigationContainer>
  );
}
