import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface headerProps {
  searchValue: string;
  setSearchValue: (a: string) => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: headerProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View style={{margin: 10, padding: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius: 5}}>
        <Feather name="search" size={25} style={{marginLeft: 10, flex: 0.5}} />
        <TextInput  style={{
                      height: 40,
                      marginLeft: 15,
                      fontSize: 17,
                      fontStyle: 'italic',
                      flex: 5
                    }}
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder='Search...' />
        <Feather name="x" size={25} style={{flex: 0.7}} onPress={() => setSearchValue('')}/>
      </View>
    </SafeAreaView>
  )
}

const HomeStack = () => {
  
  const [searchValue, setSearchValue] = useState('');

  return(
    <Stack.Navigator>
      <Stack.Screen options={{header: () => <HeaderComponent 
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />}} name="Home Screen">
        {() => <HomeScreen searchValue={searchValue} setSearchValue={setSearchValue}/>}
      </Stack.Screen>
      <Stack.Screen options={{headerStyle: {backgroundColor: '#22e3dd'}}} component={ProductScreen} name="Product Details" />
    </Stack.Navigator>
  )
}

export default HomeStack;