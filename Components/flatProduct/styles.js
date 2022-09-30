import { StyleSheet , Dimensions } from 'react-native';

const height = Dimensions.get('window').height - 180

const styles = StyleSheet.create({
    productBox :{
        height : height/4,
        flexDirection : 'row',
        marginBottom : 30
    },
    product : {
        width : '85%',
    },
    productBoxImage : {
        flex : 3
    },
    productImage : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
    productBoxTitle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#FFFFFF',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    title : {
        color : '#0EAF89',
        fontSize : 16,
        fontWeight : 'bold'
    },
    icon : {
        width : '15%',
    },
    iconBox : {
        paddingHorizontal : 8,
        paddingVertical : 10,
        backgroundColor : '#FFFFFF',
        marginBottom : 10,
        borderTopEndRadius : 30,
        borderBottomEndRadius : 30,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default styles;