import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { Linking } from 'expo';

import openMap from 'react-native-open-maps';

import WeatherForecast from '../weather/WeatherForecast';
import DifficultyIcon from './DifficultyIcon';

// TODO: update to show image
// TODO: update to have GO be button that opens in default mapping software

const ExpandedItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, setWeatherDisplay, weather, latitude, longitude
}) => {
  // update to toggle to link for web
  let mapNav = Platform.select({
    ios: () => openMap({ latitude, longitude, navigate_mode: 'navigate' }),
    android: () => openMap({ latitude, longitude, navigate_mode: 'navigate' }),
    web: () => Linking.openURL(mapLink),
  });
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  let mapViewButton = (
    <View style={styles.goToMap} >
      <TouchableOpacity 
        onPress={mapNav}
      >
        <Text>
          Get Directions
        </Text>
      </TouchableOpacity>
    </View>
  );

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
            <DifficultyIcon difficulty={difficulty} />
            <Text style={styles.length} >{length} mi</Text>
          </View>
          {mapViewButton}
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