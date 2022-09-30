import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Mytabs from './Navigations'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from './Contain/theme'
import { Provider } from 'react-redux'
import store from './store';
import Login from './Components/Login/index'

export default function App() {
  return (
    <Login/>
  );
}