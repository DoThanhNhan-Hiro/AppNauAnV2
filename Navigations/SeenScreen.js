import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import SeenScreen from '../Screen/Seen'
import { createStackNavigator } from '@react-navigation/stack';
const SeenStack = createStackNavigator();

const SeenStackScreen = () => {
    return (
        <SeenStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#008080'
            },
            headerTintColor: 'white'
        }}>

        <SeenStack.Screen name="SeenScreen" component={SeenScreen} options={{  title: 'Đã xem' }} />
        </SeenStack.Navigator>
    );
}
export default SeenStackScreen