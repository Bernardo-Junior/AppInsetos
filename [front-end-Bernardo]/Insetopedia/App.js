import React from 'react';
import { StyleSheet, StatusBar, Text, View , YellowBox} from 'react-native';

StatusBar.setBackgroundColor('#7EC24D');


YellowBox.ignoreWarnings([
  'should never be nested inside plain',
  'componentWillMount is deprecated and will be removed in the next major version',
  'componentWillReceiveProps has been renamed, and is not recommended for use',
  'componentWillMount has been renamed, and is not recommended for use'
])


import Routes from './src/router';

export default function App() {
  return (
   <Routes />
  );
}
