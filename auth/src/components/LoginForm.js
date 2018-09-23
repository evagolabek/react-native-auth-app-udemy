import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection } from './common';

//common directory+its index allows to import everything(button, card etc) in one line/more tidy

class LoginForm extends Component {
  render() {
    return (
      <Card>
      <CardSection />
      <CardSection />

      <CardSection>
        <Button>
          LogIn
        </Button>
      </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
