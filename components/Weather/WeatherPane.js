import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

import WeatherIcon from './Icons/WeatherIcon';
import WindDirection from './Icons/WindDirection';
import { colors } from '../../Constants/Colors';

const WeatherPane = ({ main, weather, wind, index, date, view, setView, setWeekday }) => {
  const { temp_min, temp_max } = main;
  
  const weatherIcon = WeatherIcon(weather[0]);
  const windDirection = WindDirection(wind.deg);

  return (
    <View style={styles.pane} >
      <TouchableOpacity 
        onPress={() => {
          view ? setWeekday(index) : null;
          setView(!view);
        }}
      >
        <View>
          <Text>{date}</Text>
        </View>
        {weatherIcon}
        <View style={styles.temp}>
          <Text style={styles.temp}>High {Math.floor(temp_max)} F</Text>
          <Text style={styles.temp}>Low {Math.floor(temp_min)} F</Text>
        </View>
        <View style={styles.windSpec}>
          <Text style={styles.windSpeed}>{Math.floor(wind.speed)} mph</Text>
          {windDirection}
        </View>
      </TouchableOpacity>
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
  temp: {
    color: colors.normalItem
  },
  windSpeed: {
    padding: 2,
    color: colors.normalItem,
  },
  windSpec: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',

  }
});

export default WeatherPane;