import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WeatherPane from './WeatherPane';

const DailyForecast = ({ weekDay, forecast, }) => {
  const daily = forecast.map((threeHour) => {
    return (
      <WeatherPane />
    );
  });
  return (
    <View>
      <Text style={styles.header} >Forecast for {weekDay}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {

  },

});

export default DailyForecast;