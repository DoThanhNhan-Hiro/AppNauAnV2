import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles'
import FlatProduct from '../../Components/flatProduct';
import { PRODUCTS } from '../../data'
const Favorite = (navigation) => {
  const favorite = useSelector(state => state.favorite.item)
  const product = favorite.map(itemID => PRODUCTS.find(item => item.id === itemID))
  const renderGirdProduct = ({ item })  => {
    return (<FlatProduct 
      title={item.title}
      thumb={item.thumb}
      id={item.id}
      navigation={navigation}
      />)
  }
  
  const renderEmpty = () => {
    return ( 
        <View>
            <Text>Danh sách món ăn đang rỗng!</Text>
        </View>
    )
}
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={renderGirdProduct}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmpty} />
    </View>
  )
}
export default Favorite

