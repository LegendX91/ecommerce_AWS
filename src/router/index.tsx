import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNav';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false
        }}>
           <Root.Screen component={BottomTabNavigator} name="HomeTabs" />
      </Root.Navigator> 
    </NavigationContainer>
  )
}

export default Router