import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,Image } from 'react-native'
import React from 'react'
import styles from './styles'
const Profile = ({ navigation }) => {
  const changeScreen = () => {
    navigation.push('CategoryScreen', {});
  }
  return (
    <Image source={require('../../assets/images/Picture1.png')} />
  )
}

export default Profile

