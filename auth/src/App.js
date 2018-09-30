import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

// firebase import should be above other imports
//configuration object(below)is paste from the firebase website
class App extends Component {
  //by default user is not loggedIn
  //null represent 'no idea if you signed in or not'
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBf94VGTNcjXb_mr2pT8VnD1N5l0Z7MCTQ",
    authDomain: "authentication-23320.firebaseapp.com",
    databaseURL: "https://authentication-23320.firebaseio.com",
    projectId: "authentication-23320",
    storageBucket: "authentication-23320.appspot.com",
    messagingSenderId: "469692650204"
  });

    // component level state that tract whether user is loggedin or not
    // callback from the firebase library
    firebase.auth(.onAuthStateChanged(user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
    if (this.state.loggedIn) {
      return (
        <Button>
        Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
