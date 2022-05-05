import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
        <Tab.Navigator 
            screenOptions={{
              tabBarActiveTintColor: '#e47911',
              tabBarInactiveTintColor: '#ffbd7d',
              tabBarShowLabel:false
              
            }}
        >
          <Tab.Screen 
            component={HomeScreen} 
            name="Home"
            options={{
              tabBarIcon:(({color}) => <Entypo name="home" size={30} color={color}/>)
            }} />
          <Tab.Screen 
            component={HomeScreen} 
            name="Profile"
            options={{
              tabBarIcon:(({color}) => <Entypo name="user" size={30} color={color}/>)
            }}  />
          <Tab.Screen 
            component={ShoppingCartScreen} 
            name="Shopping Cart"
            options={{
              tabBarIcon:(({color}) => <Entypo name="shopping-cart" size={30} color={color}/>)
            }}  />
          <Tab.Screen 
            component={HomeScreen} 
            name="More"
            options={{
              tabBarIcon:(({color}) => <Entypo name="menu" size={30} color={color}/>)
            }}  />
        </Tab.Navigator> 
  )
}

export default BottomTabNavigator;