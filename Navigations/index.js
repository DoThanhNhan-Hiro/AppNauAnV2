import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../Contain/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SeenStackScreen from './SeenScreen'
import FavoriteScreen from './FavoriteScreen'
import ProfileScreen from './ProfileScreen'
import HomeStackScreen from './HomeStackScreen';
import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();
const Mytab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // tabBar={} dùng để custom cái thằng bottom tab
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home';
                        } else if (route.name === 'Seen') {
                            iconName = focused ? 'eye' : 'eye';
                        }
                        else if (route.name === 'Favorite') {
                            iconName = focused ? 'heart' : 'heart';
                        }
                        else if (route.name === 'Profile') {
                            iconName = focused ? 'user' : 'user';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#008080',
                        height: 65,
                        paddingBottom: 10, justifyContent: "center", alignItems: "center"
                    },
                    tabBarLabelStyle: {
                        fontSize: 14, alignSelf: 'center'
                    },
                    headerShown: false
                })}>
                <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: "Trang chủ", headerTitleAlign: 'center', }} />
                <Tab.Screen name="Seen" component={SeenStackScreen} options={{ title: "Đã xem", headerTitleAlign: 'center', }} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ title: "Yêu thích", headerTitleAlign: 'center', }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile", headerTitleAlign: 'center', }} />
            </Tab.Navigator>
            </NavigationContainer>
    
    )
}

export default Mytab