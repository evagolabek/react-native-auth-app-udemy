import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// TouchableOpacity is one of the few option for buttons from ReactNative
// onPress prop added to TouchableOpacity where we pass a function
// when its pressed the function will be called
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// flex: 1 means expand as much content as possible
// alignSelf (property type of the flexbox stretch) fills until the limit of the container

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgorundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
