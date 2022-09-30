import { StyleSheet, Text, View, TouchableOpacity, FlatList,SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import  Category  from '../../Components/Category';
import {CATEGORIES} from '../../data/index'
const Home = ({navigation}) => {
    const renderGridCategory = ({item}) => {
        return (
            <Category 
                title={item.title}
                thumb={item.thumb}
                onPress={() => {
                    navigation.push('CategoryScreen',{
                        categoryId : item.id,
                        categoryName : item.title
                    })
                }}
            />
        )
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderGridCategory}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
export default Home

