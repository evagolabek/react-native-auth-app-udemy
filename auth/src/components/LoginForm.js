import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

//common directory+its index allows to import everything(button, card etc) in one line/more tidy
// onChangeText event function is called whenever user type text in TextInput
// setState is called at the same time and its current value is this.state.text
// plus whenever we call setState the component immediately rerender
//when it rerender we tell it that the value is this.state.text
// THE TEXT EXISTS AS A PIECE OF STATE ON OUR COMPONENT

class LoginForm extends Component {
  state = {text: '' };
  render() {
    return (
      <Card>
      <CardSection>
        <Input
          value={this.state.text}
          onChangeText={text => this.setState({ text: text })}
        />
      </CardSection>
      <CardSection>

      </CardSection>

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
