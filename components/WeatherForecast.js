import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { darksky } from '../keys';

const WeatherForecast = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState();

  // this might be better as a useEffect??
  const getWeather = (latitude, longitude) => {

  };

};

const styles = StyleSheet.create({

});

export default WeatherForecast;