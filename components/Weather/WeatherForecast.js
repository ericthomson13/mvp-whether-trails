/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

import ForecastList from './ForecastList';
import colors from '../../Constants/Colors';

const WeatherForecast = ({ weather }) => {
  const [view, setView] = useState(true);
  const [weekday, setWeekday] = useState(null);

  const weeklyData = [];
  if (weather !== null && view) {
    for (let i = 0; i < weather.length; i++) {
      if (i === 0 || i % 8 === 0) {
        weeklyData.push(weather[i]);
      }
    }
  }

  let dailyData;
  if (!view && weekday !== null && weather !== null) {
    dailyData = weather.filter((item) => {
      const date = new Date(item.dt * 1000);
      return weekday === date.getUTCDay();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>
          Forecast
        </Text>
      </View>
      <View style={styles.weekly}>
        <ForecastList
          data={view ? weeklyData : dailyData}
          setWeekday={setWeekday}
          weekday={weekday || null}
          setView={setView}
          view={view}
        />
      </View>
    </View>
  );
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
    borderBottomColor: colors.other,
  },
  weekly: {
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherForecast;
