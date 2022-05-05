import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import ShoppingCartStack from './shoppingCartStack';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
        <Tab.Navigator 
            screenOptions={{
              tabBarActiveTintColor: '#e47911',
              tabBarInactiveTintColor: '#ffbd7d',
              tabBarShowLabel:false,
            }}
        >
          <Tab.Screen 
            component={HomeStack} 
            name="Home"
            options={{
              tabBarIcon:(({color}) => <Entypo name="home" size={30} color={color}/>),
              headerShown: false,
            }} />
          <Tab.Screen 
            component={ShoppingCartStack} 
            name="Shopping Cart"
            options={{
              tabBarIcon:(({color}) => <Entypo name="shopping-cart" size={30} color={color}/>),
              headerShown: false
            }}  />
          <Tab.Screen 
            component={MenuScreen} 
            name="More"
            options={{
              tabBarIcon:(({color}) => <Entypo name="menu" size={30} color={color}/>)
            }}  />
        </Tab.Navigator> 
  )
}

export default BottomTabNavigator;