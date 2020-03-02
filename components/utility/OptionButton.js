import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const OptionButton = ({ name, setSelectedActivity }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => setSelectedActivity(name)} style={styles.button} >
        <Text>
          {name}
        </Text>
      </TouchableOpacity>
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
