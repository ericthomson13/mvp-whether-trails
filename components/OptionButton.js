import React from 'react';
import { Button, View, StyleSheet, TouchableOpacity } from 'react-native';

// upgrade to touchableOpacity in long run
const OptionButton = ({ name, setSelectedActivity }) => {
  return (
    <View>
      {/* <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedActivity(name)} >
          <Text>{name}</Text>
        </TouchableOpacity>
      </View> */}
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
    
    // color: '#126659',
  }
});

export default OptionButton;
