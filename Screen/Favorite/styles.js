import { StyleSheet , Dimensions} from 'react-native';


const height = Dimensions.get('window').height - 180

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        paddingHorizontal : 15,
        paddingTop : 24,
        backgroundColor : '#EFF7F8',
    },
})

export default styles;