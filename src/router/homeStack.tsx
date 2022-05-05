import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface headerProps {
  searchValue: string;
  setSearchValue: (a: string) => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: headerProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View style={{margin: 10, padding: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
        <Feather name="search" size={20} />
        <TextInput  style={{
                      height: 40,
                      marginLeft: 10.
                    }}
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder='Search for something' />
      </View>
    </SafeAreaView>
  )
}

const HomeStack = () => {
  
  const [searchValue, setSearchValue] = useState('');

  return(
    <Stack.Navigator
      screenOptions={{
      header: () => <HeaderComponent 
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
      }}>
      <Stack.Screen name="Home Screen">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="Product Details" />
    </Stack.Navigator>
  )
}

export default HomeStack;