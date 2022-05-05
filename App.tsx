import React from 'react';
import { StatusBar, View, useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import 'react-native-gesture-handler';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig);

import { withAuthenticator } from 'aws-amplify-react-native';

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

export default withAuthenticator(App);
