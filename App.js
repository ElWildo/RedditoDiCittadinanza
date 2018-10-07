import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

import AppNavigator from './AppNavigator'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Titillium Web': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if(this.state.fontLoaded) 
    return <AppNavigator />;
    else
    return null
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
