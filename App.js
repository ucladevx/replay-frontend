import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup'; 
import Landing from './screens/Landing';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
