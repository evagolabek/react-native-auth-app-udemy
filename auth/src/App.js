import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

// firebase import should be above other imports
//configuration object(below)is paste from the firebase website
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBf94VGTNcjXb_mr2pT8VnD1N5l0Z7MCTQ",
    authDomain: "authentication-23320.firebaseapp.com",
    databaseURL: "https://authentication-23320.firebaseio.com",
    projectId: "authentication-23320",
    storageBucket: "authentication-23320.appspot.com",
    messagingSenderId: "469692650204"
  });
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <Text> An App</Text>
      </View>
    );
  }
}

export default App;
