import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OptionButton = (props) => {

  return (
    <View style={styles.buttonView}>
      <Button style={styles.button} title={props.name} onPress={() => props.setSelectedActivity(props.name)}/>
    </View>
  );
  
};

const styles = StyleSheet.create({ 
  buttonView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  // this color isn't working yet
  button: {
    color: '#126659',
  }
});

export default OptionButton;
