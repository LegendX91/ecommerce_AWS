import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import LocationScreen from '../screens/LocationScreen/index_CheckOutOpt';
import OrderPlacedScreen from '../screens/OrderPlacedScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#22e3dd'}}}>
      <Stack.Screen options={{headerTintColor: 'white'}} component={ShoppingCartScreen} name="Cart Screen" />
      <Stack.Screen options={{headerTintColor: 'white'}} component={AddressScreen} name="Address Details" />
      <Stack.Screen options={{headerTintColor: 'white'}} component={OrderPlacedScreen} name="Order Placed" />
      <Stack.Screen options={{headerTintColor: 'white'}} component={LocationScreen} name="Address Choice" />
    </Stack.Navigator>
  )
}

export default ShoppingCartStack;