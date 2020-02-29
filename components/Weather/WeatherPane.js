import React, { useState, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import WeatherIcon from './Icons/WeatherIcon';
import WindDirection from './Icons/WindDirection';

const WeatherPane = ({ main, clouds, weather, wind }) => {
  const { temp_min, temp_max } = main;

  const weatherIcon = WeatherIcon(weather[0]);
  const windDirection = WindDirection(wind.deg);

  return (
    <View style={styles.pane} >
      {weatherIcon}
      <Text style={styles.maxTemp}>{Math.floor(temp_max)} F</Text>
      <Text style={styles.minTemp}>{Math.floor(temp_min)} F</Text>
      <View style={styles.windSpec}>
        <Text style={styles.windSpeed}>{Math.floor(wind.speed)} MPH</Text>
        {windDirection}
      </View>
    </View>
  );
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
    padding: 2,

  },
  windSpec: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',

  }
});

export default WeatherPane;