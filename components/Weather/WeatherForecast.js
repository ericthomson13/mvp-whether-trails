import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import axios from 'axios';

import { openWeather } from '../../keys';
import WeeklyForecast from './WeeklyForecast';
import DailyForecast from './DailyForecast';

// TODO: add subcomponents and view to change allowing for different levels of forecasts to be used
// TODO: add onPress to forecast for view of that day
// TODO: allow user to set their units metric/standard

const WeatherForecast = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=Imperial&appid=${openWeather}`;
      const result = await axios({
        method: 'get',
        url,
        responseType: 'stream'
      })
      const forecast = JSON.parse(result.request.responseText);
      setWeather(forecast.list);
    } catch {
      console.log('error in getting weather');
    }
  };

  useEffect(() => {
    if (weather !== null) {
      return;
    }
    getWeather();
  });

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