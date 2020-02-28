import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';

import WeatherPane from './WeatherPane';

// TODO: update to show high and low for 24h window
// TODO: update to use DailyForecast on click of Pane

const WeeklyForecast = ({ data }) => {
  const panes = data.map((item) => {
    return (
      <WeatherPane {...item} key={item.dt}/>
    );
  });
  return (
    <View style={styles.container} >
      <ScrollView style={styles.list} horizontal={true} >
        {panes}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    
  }
});

export default WeeklyForecast;