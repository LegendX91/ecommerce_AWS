import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#22e3dd'}}}
      >
      <Stack.Screen component={ShoppingCartScreen} name="Cart Screen" />
      <Stack.Screen component={AddressScreen} name="Address Details" />
    </Stack.Navigator>
  )
}

export default ShoppingCartStack;