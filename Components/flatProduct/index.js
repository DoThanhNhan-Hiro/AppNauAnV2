import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../store/slice/favorite';



const FlatProduct = ({ heart, title, thumb, id, navigation }) => {
    const dispatch = useDispatch()
    const trashproduct = () => {
        Alert.alert(
            "Thông báo",
            "Bạn có chắc muốn xóa sản phẩm này?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                { text: "OK", onPress: () => dispatch(removeFavorite({ id })) }
            ]
        );

    }
    // const changeproduct = () => {
    //     navigation.navigate('ProductScreen',{
    //         productID: id,
    //         productName: title
    //     })
    // }
    return (
        <TouchableOpacity  style={styles.productBox} >
            <View style={styles.product}>
                <View style={styles.productBoxImage}>
                    <Image style={styles.productImage} source={thumb} />
                </View>
                <View style={styles.productBoxTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.icon}>
                {
                    heart
                        ? (<View style={styles.iconBox}>

                            <Icon name='heart' size={17} />
                        </View>)
                        : <View />
                }
                <TouchableOpacity onPress={trashproduct} style={styles.iconBox}>
                    <Icon name='trash' size={17} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FlatProduct
