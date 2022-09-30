import { StyleSheet, Text, View,Image,ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import image from '../assets/images/Picture1.png'
const ProfileScreen = () => {

  return (
   
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <StatusBar backgroundColor='#304D95'/>
  </ImageBackground>  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        margin:0,
        marginBottom:-1
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
})