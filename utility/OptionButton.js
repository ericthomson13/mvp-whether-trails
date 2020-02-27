import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OptionButton = (props) => {

  return (
    <View style={styles.buttonView}>
      <Button title={props.name} onPress={() => props.setSelectedActivity(props.name)}/>
    </View>
  );
  
};

const styles = StyleSheet.create({ 
  buttonView: {
    alignContent: 'center',
    justifyContent: 'center',
    
  }
});

export default OptionButton;
