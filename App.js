'use strict';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';



const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
})

export default App;