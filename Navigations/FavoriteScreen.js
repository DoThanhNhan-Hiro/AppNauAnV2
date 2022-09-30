import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteScreen from '../Screen/Favorite'
import { createStackNavigator } from '@react-navigation/stack';
const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = () => {
    return (
        <FavoriteStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#008080'
            },
            headerTintColor: 'white'
        }}>

        <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{  title: 'Yêu thích' }} />
        </FavoriteStack.Navigator>
    );
}
export default FavoriteStackScreen