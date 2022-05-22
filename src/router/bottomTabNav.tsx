import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import Entypo from 'react-native-vector-icons/Entypo';
import ShoppingCartStack from './shoppingCartStack';
import MenuScreen from '../screens/MenuScreen';
import LocationScreen from '../screens/LocationScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
        <Tab.Navigator 
            screenOptions={{
              tabBarActiveTintColor: '#e47911',
              tabBarInactiveTintColor: '#ffbd7d',
              tabBarShowLabel:false,
              tabBarLabelStyle:{
                color: 'white'
              }
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
            component={LocationScreen} 
            name="SavedBookmarks"
            options={{
              tabBarIcon:(({color}) => <Entypo name="book" size={30} color={color}/>),
              headerShown: false,
            }} />
          <Tab.Screen 
            component={MenuScreen} 
            name="Profile"
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#22e3dd'},
              tabBarIcon:(({color}) => <Entypo name="user" size={30} color={color}/>)
            }}  />
        </Tab.Navigator> 
  )
}

export default BottomTabNavigator;