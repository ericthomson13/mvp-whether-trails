import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OptionButton = (props) => {

  return (
    <View style={styles.buttonView}>
      <Button title={props.name} onPress={props.onPress()}/>
    </View>
  );
  
};

const styles = StyleSheet.create({ 

});

export default OptionButton;
