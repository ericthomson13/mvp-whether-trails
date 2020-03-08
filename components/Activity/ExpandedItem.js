import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, } from 'react-native';
import { Linking } from 'expo';

import TextButton from '../utility/TextButton';
import WeatherForecast from '../weather/WeatherForecast';
import DifficultyIcon from './DifficultyIcon';
import { colors } from '../../Constants/Colors';

const ExpandedItem = ({ 
  name, summary, difficulty, imgSmallMed, location, url, length, setWeatherDisplay, weather, latitude, longitude,
}) => {
  const mapNav = Platform.select({
    ios: () => Linking.openURL(`maps://app?saddr=${location.latitude}+${location.longitude}&daddr=${latitude}+${longitude}`),
    android: () => Linking.openURL(`google.navigation:q=${latitude}+${longitude}`),
    web: () => Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`),
  });

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
          <View>
            <Image source={{uri: imgSmallMed}} style={{width: 200, height: 200}}/>
          </View>
          {/* <MapViewButton latitude={latitude} longitude={longitude} /> */}
          <TextButton press={mapNav} name="Get Directions" style={buttonStyle} />
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
    backgroundColor: colors.buttonBackground,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    maxHeight: '100%',
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
    borderBottomColor: colors.other,
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
    color: colors.normalItem,
    fontWeight: 'bold',
  },
  location: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,

  },
  locationText: {
    color: colors.normalItem,
    fontWeight: 'bold',
  },
});

const buttonStyle = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: colors.other,
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: colors.buttonTextColor,
  }
})

export default ExpandedItem;