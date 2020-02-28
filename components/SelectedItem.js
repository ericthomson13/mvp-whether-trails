import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import WeatherForecast from './WeatherForecast';

const SelectedItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, latitude, longitude, select,
}) => {

  return (
    <View>
      <Text>
        This Item was Selected {name}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default SelectedItem;