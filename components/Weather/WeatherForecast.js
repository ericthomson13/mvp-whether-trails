import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import ForecastList from './ForecastList';
import { useSelector } from 'react-redux';

const WeatherForecast = ({ weather }) => {
  const forecastDisplay = useSelector((state) => state.weather.view);
  const weekday = useSelector((state) => state.weather.weekday);

  let weeklyData = [];
  if (weather !== null && forecastDisplay === 'weekly') {
    for (let i = 0; i < weather.length; i++) { 
      if (i === 0 || i % 8 === 0) {
        weeklyData.push(weather[i]);
      }
    };
  };

  let dailyData = [];
  if (forecastDisplay === 'daily' && weekday !== null && weather !== null) {
    dailyData = weather.filter((item) => {
      let date = new Date(item.dt * 1000)
      return weekday === date.getUTCDay();
    });
  }


  return (
    <View style={styles.container} >
      <View style={styles.title}>
        <Text>
          Forecast
        </Text>
      </View>
      <View style={styles.weekly} >
        <ForecastList data={forecastDisplay === 'weekly' ? weeklyData : dailyData} weekday={weekday} />
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