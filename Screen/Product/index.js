import { useEffect, React } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { PRODUCTS } from '../../data/index'
import { addnewproduct } from '../../store/slice/viewed'
import { useDispatch, useSelector } from 'react-redux';


const Product = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { productID, productName } = route.params
    const product = PRODUCTS.find(item => item.id === productID)
    const { id, categoryId, title, thumb, view, favorite, intro, ingredients, instructions } = product
    useEffect(() => {
        dispatch(addnewproduct({ id }))
    }, [])
    return (
        <View style={styles.product}>
            <Image style={styles.background} source={require('../../assets/images/background.png')} />
            <View style={styles.productImg}>
                <Image style={styles.img} source={thumb} />
                <View style={[styles.productImgIcon, styles.productImgIconLeft]}>
                    <Icon name={'heart'} />
                    <Text style={styles.numbertim}>{favorite}</Text>
                </View>
                <View style={[styles.productImgIcon, styles.productImgIconRight]}>
                    <Icon name={'eye'} />
                    <Text style={styles.numbertim}>{view}</Text>
                </View>
            </View>
            <View style={styles.productContent}>
                <ScrollView>
                    <Text style={[styles.text, styles.productContentText]}>{intro}</Text>
                    <View style={styles.productContentBox}>
                        <View style={styles.productContentBoxTitle}>
                            <Text style={[styles.textTitle]}>Nguyên liệu</Text>
                        </View>
                        <Text style={[styles.text, styles.productContentBoxContent]}>
                            {ingredients}
                        </Text>
                    </View>
                    <View style={styles.productContentBox}>
                        <View style={styles.productContentBoxTitle}>
                            <Text style={[styles.textTitle]}>cách làm</Text>
                        </View>
                        <Text style={[styles.text, styles.productContentBoxContent]}>
                            {instructions}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default Product
