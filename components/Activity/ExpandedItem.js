import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Linking } from 'expo';
import { useDispatch } from 'react-redux';

import WeatherForecast from '../weather/WeatherForecast';
import { setMapItem } from '../../store/actions/activityActions';

// TODO: update to show image

const ExpandedItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, setWeatherDisplay, weather
}) => {
  const dispatch = useDispatch();

  return (
    <View 
      style={styles.card}
    >
      <TouchableOpacity 
        onPress={() => setWeatherDisplay(false)}
      >
        <View style={styles.header} >
          <TouchableOpacity>
            <Text style={styles.name} onPress={()=> Linking.openURL(url)}>{name}</Text>
          </TouchableOpacity>
          <View style={styles.dlContainer} >
            <Text style={styles.difficulty} >{difficulty}</Text>
            <Text style={styles.length} >{length} mi</Text>
          </View>
          <View style={styles.goToMap} >
            <TouchableOpacity onPress={() => dispatch(setMapItem(index))}>
              <Text>
                GO TO MAP
              </Text>
            </TouchableOpacity>
          </View>
       </View>
        <View style={styles.location}>
          <Text style={styles.locationText} >{location}</Text>
        </View>
        <Text style={styles.summary} >{summary}</Text>
      </TouchableOpacity>
      <View>
        <WeatherForecast weather={weather} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    backgroundColor: '#126659',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  name: {
    alignContent: 'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BFD1E5',
  },
  difficulty: {
    alignItems: 'center',
    fontSize: 14,
    paddingRight: 10,    
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#542344',
    padding: 5,
    margin: 5,

  },
  dlContainer: {
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  summary: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '75%',

  },
  image: {
    width: '20%',
    height: '20%',
  },
  length: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#BFD1E5',
    fontWeight: 'bold',
  },
  location: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,

  },
  locationText: {
    color: '#BFD1E5',
    fontWeight: 'bold',
  },
  goToMap: {

  },
});

export default ExpandedItem;