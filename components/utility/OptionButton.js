import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const OptionButton = ({ name, setSelectedActivity }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => setSelectedActivity(name)} style={styles.button} >
        <Text style={styles.text} >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  buttonView: {
    alignItems: 'center',
    justifyItems: 'center',
  },
  // this color isn't working yet
  button: {
    borderColor: '#BFD1E5',
    backgroundColor: '#126659',
    alignItems: 'center',
    justifyItems: 'center',
    borderRadius: 10,

  },
  text: {
    borderColor: '#BFD1E5',
    color: '#FFF275',
    fontSize: 18,
    padding: 5,
    margin: 5,
  }
});

export default OptionButton;
