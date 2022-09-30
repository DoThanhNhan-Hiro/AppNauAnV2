import { StyleSheet, Text, View,ImageBackground,SafeAreaView,Image } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.img} source={require('../../assets/images/Vector.png')} />
    <Image style={styles.imgLogotobe} source={require('../../assets/images/logotobe.png')} />
    <Image style={styles.need} source={require('../../assets/images/need.png')} />
  
  </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img: {
     flex:1,
        justifyContent: "center"
      },
})