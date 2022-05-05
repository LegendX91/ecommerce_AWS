import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="Home Screen" />
      <Stack.Screen component={ProductScreen} name="Product Details" />
    </Stack.Navigator>
  )
}

export default HomeStack;