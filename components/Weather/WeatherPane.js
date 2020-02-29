import React, { useState, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import WeatherIcon from './Icon/WeatherIcon';

const WeatherPane = ({ main, clouds, weather, wind }) => {
  const { temp_min, temp_max } = main;

  const weatherIcon = WeatherIcon(weather[0]);
  
  return (
    <View style={styles.pane} >
      {weatherIcon}
      <Text style={styles.maxTemp}>{Math.floor(temp_max)} F</Text>
      <Text style={styles.minTemp}>{Math.floor(temp_min)} F</Text>
      {/* <Text style={styles.weatherDescription}>{weather[0].description}</Text> */}
      <Text style={styles.windSpeed}>{Math.floor(wind.speed)} MPH</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  pane: {
    padding: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  maxTemp: {

  },
  minTemp: {

  },
  weatherDescription: {

  },
  windSpeed: {

  }
});

export default WeatherPane;