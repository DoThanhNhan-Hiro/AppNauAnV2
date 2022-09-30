import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screen';
import { ProductScreen } from '../Screen';
import  { CategoryScreen} from '../Screen'
import { NavigationContainer } from '@react-navigation/native';
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#008080'
                },
                headerTintColor: 'white'
            }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Món ăn ngon", headerTitleAlign: 'center'}} />
            <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{  title: 'Yêu thích' }} />
            <HomeStack.Screen name="ProductScreen" component={ProductScreen} options={{  title: 'Chi tiết sản phẩm' }} />



         
        </HomeStack.Navigator>
    );
}
export default HomeStackScreen