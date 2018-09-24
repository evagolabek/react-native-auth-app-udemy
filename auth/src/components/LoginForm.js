import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

//common directory+its index allows to import everything(button, card etc) in one line/more tidy
// onChangeText event function is called whenever user type text in TextInput
// setState is called at the same time and its current value is this.state.text
// plus whenever we call setState the component immediately rerender
//when it rerender we tell it that the value is this.state.text
// THE TEXT EXISTS AS A PIECE OF STATE ON OUR COMPONENT

//just listing the prop secureTextEntry makes it true

class LoginForm extends Component {
  state = { email: '', password:'', error:'' };

//user authentication
//catch error function when signin fails
  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catc(() => {
            this.setState({ error: 'authentication failed.'});
          });
      });
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>

      <CardSection>
        <Button onPress={this.onButtonPress.bind}>
          LogIn
        </Button>
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
