import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCategory from '../../Components/flatCategory'
import styles from './styles'
import { PRODUCTS } from '../../data/index'
const Category = ({ navigation, route }) => {
  const { categoryId, categoryName } = route.params
  const productData = PRODUCTS.filter(item => item.categoryId === categoryId)
  const renderGridCategory = ({ item }) => {
    return (
      <FlatCategory
      id={item.id}
      title={item.title}
      thumb={item.thumb}
      view={item.view}
      favorite={item.favorite}
      onPress={() => {
        navigation.push('ProductScreen', {
          productID: item.id,
          productName: item.title
        })
      }} />)
  }
  //tim kiem gia tri item.categoryId === categoryId sẽ luu vao product data
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderGridCategory}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  )
}

export default Category