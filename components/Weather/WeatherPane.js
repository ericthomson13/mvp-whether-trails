import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import WeatherIcon from './Icons/WeatherIcon';
import WindDirection from './Icons/WindDirection';

const WeatherPane = ({ main, weather, wind }) => {
  const { temp_min, temp_max } = main;

  const weatherIcon = WeatherIcon(weather[0]);
  const windDirection = WindDirection(wind.deg);
  const weekday = 0;

  return (
    <View style={styles.pane} >
      <View>
        <Text>Weekday</Text>
      </View>
      {weatherIcon}
      <View style={styles.temp}>
        <Text style={styles.maxTemp}>High {Math.floor(temp_max)} F</Text>
        <Text style={styles.minTemp}>Low {Math.floor(temp_min)} F</Text>
      </View>
      <View style={styles.windSpec}>
        <Text style={styles.windSpeed}>{Math.floor(wind.speed)} mph</Text>
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
  temp: {

  },
  maxTemp: {
    color: '#BFD1E5'
  },
  minTemp: {
    color: '#BFD1E5'
  },
  weatherDescription: {

  },
  windSpeed: {
    padding: 2,
    color: '#BFD1E5',
  },
  windSpec: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',

  }
});

export default WeatherPane;