/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, StyleSheet, ScrollView,
} from 'react-native';

import WeatherPane from './WeatherPane';

// TODO: update to show high and low for 24h window
// TODO: have find current day and ensure that first day is current day
// TODO: update timestamp on daily to just have HH:MM
// TODO: convert timestamp to local from UTC time

const ForecastList = ({
  data, setView, view, setWeekday,
}) => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  let date; let dateIndex;

  const panes = data.map((item) => {
    date = new Date(item.dt * 1000);
    if (view) {
      dateIndex = date.getUTCDay();
      date = days[dateIndex];
    } else {
      // eslint-disable-next-line prefer-destructuring
      date = date.toString().split(' ')[4];
    }
    return (
      <WeatherPane
        {...item}
        key={item.dt}
        date={date}
        index={dateIndex}
        setView={setView}
        view={view}
        setWeekday={setWeekday}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list} horizontal>
        {panes}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
  },
});

export default ForecastList;
