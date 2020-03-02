import React from 'react';
import { Button, View, StyleSheet, } from 'react-native';

// TODO: upgrade to touchableOpacity

const OptionButton = ({ name, setSelectedActivity }) => {
  return (
    <View>
      <Button title={name} onPress={() => setSelectedActivity(name)} />
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
    borderColor: '#BFD1E5',
  }
});

export default OptionButton;
