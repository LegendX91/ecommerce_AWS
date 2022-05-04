import React from 'react';
import { StatusBar, SafeAreaView, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ProductScreen />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
}

export default App;
