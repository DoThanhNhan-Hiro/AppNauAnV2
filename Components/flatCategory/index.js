import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/slice/favorite';
const FlatCategory = ({ id, title, thumb, heart, navigation, view, favorite, onPress }) => {
    const dispatch = useDispatch()
    const favoriteData = useSelector(state => state.favorite.item)
    const isfavorite = favoriteData.includes(id);
    //include ktra có tồn tại id ko
    const iconfavorite = isfavorite ? 'heart' : 'heart-o'
    const numberfavorute = isfavorite ? favorite + 1 : favorite
    const changefavorite = () => {
        
        dispatch(toggleFavorite({ id}))
        
    }
    return (
        <TouchableOpacity style={styles.productWrap} onPress={onPress}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <Text style={styles.productText}>{title}</Text>
                <View style={styles.productIcon}>
                    <TouchableOpacity
                        onPress={changefavorite} style={styles.icon}>
                        <Text style={styles.numbertim}>{numberfavorute}</Text>
                        <Icon name={iconfavorite} size={17} />

                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <Icon name='eye' size={22} style={styles.eye} />
                        <Text style={styles.numberxem}>{favorite}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FlatCategory
