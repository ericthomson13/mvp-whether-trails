import React from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import WeatherPane from './WeatherPane';

// TODO: update to show high and low for 24h window
// TODO: update to use DailyForecast on click of Pane

const ForecastList = ({ data }) => {
  const view = useSelector((state) => state.weather.view);
  const days = useSelector((state) => state.weather.days);

  let date, dateIndex;

  const panes = data.map((item) => {
    date = new Date(item.dt * 1000);
    if (view === 'weekly') {
      dateIndex = date.getUTCDay();
      date = days[dateIndex];
    } else {
      date = date.toString().split(' ')[4];
    };
    return (
      <WeatherPane {...item} key={item.dt} date={date} key={dateIndex} />
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
    alignContent: 'center',
    justifyContent: 'center', 
  },
  list: {
    flexDirection: 'row',
  }
});

export default ForecastList;