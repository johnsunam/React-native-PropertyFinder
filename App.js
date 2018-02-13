'use strict';


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
class SearchPage extends Component {

  static navigationOptions ={
    title:'Property Finder'
  }
  render() {
    return <Text style={styles.description}>Search for the house to buy!(Again)</Text>;
  }
}





const App = StackNavigator({
  Home: {screen: SearchPage}
})

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

export default App;