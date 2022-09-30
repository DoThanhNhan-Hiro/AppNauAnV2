import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
const Icons = ({name,number}) => {
    return (
        <View style={styles.container}>
            <Icons name={name} size={30}  />
            {
                number 
                ? <Text style={styles.iconText}>{number}</Text>
                : <Text></Text>
            }
        </View>
    )
}

export default Icons




