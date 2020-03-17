/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { colors } from '../../Constants/Colors';

const LocationListButton = ({ setShowList, showList, }) => {
  const text = showList ? 'Close List' : 'See Popular Destinations';
  return (
    <View style={styles.buttonView}>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    backgroundColor: colors.other,
    padding: 3,
    borderRadius: 10,
  },
  text: {
    color: colors.buttonTextColor,
    fontSize: 14,
    padding: 5,
    margin: 2,
  },
});

export default LocationListButton;