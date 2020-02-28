import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { Linking } from 'expo';

import { darksky } from '../keys';
import sampleWeather from '../SampleData/darksky.js';

// TODO: add subcomponents and view to change allowing for different levels of forecasts to be used
const WeatherForecast = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);
  // this might be better as a useEffect??
  const getWeather = async () => {
    const foundWeather = await fetch(`https://api.darksky.net/forecast/${darksky}/${latitude},${longitude}`, {
      mode: 'no-cors'
    });
    setWeather( JSON.parse(foundWeather));
  };
  // refactor to use state
  if (weather === null) {
    getWeather();
  } 
  return (
    <View style={styles.container} >
      <Text>
        Weather forecast pending
      </Text>
      <View>
        <TouchableOpacity onPress={() => {Linking.openURL('https://darksky.net/poweredby/')}}>
          <Text>Powered by Darksky</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {

  },

});

export default WeatherForecast;