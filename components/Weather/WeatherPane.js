import React, { useState, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const WeatherPane = ({ main, clouds, weather, wind }) => {
  const { temp_min, temp_max } = main;
  return (
    <View>
      <Text>{temp_max}</Text>
      <Text>{temp_min}</Text>
      <Text>{weather[0].description}</Text>
      <Text>{wind.speed}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default WeatherPane;