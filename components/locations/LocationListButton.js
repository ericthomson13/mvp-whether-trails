import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';

import { colors, } from '../../Constants/Colors';

import LocationItem from './LocationItem';

const LocationListButton = ({ setShowList, showList, }) => {
  const text = showList ? 'Close List' : 'See Popular Destinations';
  return (
    <View style={styles.buttonView} >
      <TouchableOpacity style={styles.button} onPress={() => setShowList(!showList)}>
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({ 
  buttonView: {

  },
  button: {

  },
  text: {

  },
});

export default LocationListButton;