// import libraries for making component ({distructed import - text tag(primitive element e.g. text, view)})
import React from 'react';
import { Text, View } from 'react-native';

//make a component(in this case fat arrow function)
const  Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#cce6ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 40
  }
};

//make the component available to other parts of the app (by exporting them with the export statment)
export { Header };
