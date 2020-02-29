import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { Linking } from 'expo';
import axios from 'axios';

import { openWeather } from '../keys';
import SampleOpenWeather from '../SampleData/openWeather';

// TODO: add subcomponents and view to change allowing for different levels of forecasts to be used
// TODO: add onPress to forecast for 3h view of that day
// TODO: allow user to set their units metric/standard

const WeatherForecast = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);
  const getWeather = async () => {
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeather}`;
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

  console.log('weather: ', weather);

  useEffect(() => {
    if (weather !== null) {
      return;
    }
    getWeather();
  });

  return (
    <View style={styles.container} >
      <Text>
      Forecast pending....
      </Text>
      <View>

      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {

  },
  poweredBy: {

  },
  poweredByText: {
    fontSize: 5
  }
});

export default WeatherForecast;