import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import WeeklyForecast from './WeeklyForecast';
// import DailyForecast from './DailyForecast';

// TODO: update so weather is correct for each trailhead
// TODO: add subcomponents and view to change allowing for different levels of forecasts to be used
// TODO: add onPress to forecast for view of that day
// TODO: allow user to set their units metric/standard

const WeatherForecast = ({ weather }) => {

  let weeklyData = [];
  if (weather !== null) {
    for (let i = 0; i < weather.length; i++) { 
      if (i === 0 || i % 8 === 0) {
        weeklyData.push(weather[i]);
      }
    };
  };

  return (
    <View style={styles.container} >
      <View style={styles.title}>
        <Text>
          Forecast
        </Text>
      </View>
      
      <View style={styles.weekly} >
        <WeeklyForecast data={weeklyData} />
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'space-between',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    margin: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#542344',
  },
  weekly: {
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default WeatherForecast;