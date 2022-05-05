import React from 'react';
import { StatusBar, View, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import 'react-native-gesture-handler';

const App = () => {

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.lighter,
    flex: 1,
  }

  return (
    <View style={backgroundStyle}>
      <Router />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </View>
  );
}

export default App;
