import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';

export default function App() {
  return (
    <Login />
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
