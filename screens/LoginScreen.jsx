import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHANGARRITO FIF</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GET STARTED!</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signupLink}>Sign up here</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#800080',
    fontSize: 18,
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  signupLink: {
    color: '#0000FF',
  },
});

export default LoginScreen;