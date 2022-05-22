import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddressScreen from '../screens/AddressScreen/index_addSimple';
import LocationScreen from '../screens/LocationScreen';

const Stack = createStackNavigator();

const LocationsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#22e3dd'}}}>
      <Stack.Screen options={{headerTintColor: 'white'}} component={LocationScreen} name="Addresses List" />
      <Stack.Screen options={{headerTintColor: 'white'}} component={AddressScreen} name="Add New Address" />
    </Stack.Navigator>
  )
}

export default LocationsStack;