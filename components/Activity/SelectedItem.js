import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import WeatherForecast from '../Weather/WeatherForecast';

const SelectedItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, latitude, longitude, select,
}) => {

  return (
    <View 
      style={styles.card}
    >
      <TouchableOpacity 
        onPress={() => select({ index, name, summary, difficulty, imgSqSmall, stars, location, url, length, latitude, longitude })}
      >
        <View style={styles.header} >
          <TouchableOpacity>
  <Text style={styles.name} onPress={()=> Linking.openURL(url)}>{name}</Text>
         </TouchableOpacity>
          <View style={styles.dlContainer} >
            <Text style={styles.difficulty} >{difficulty}</Text>
            <Text style={styles.length} >{length}</Text>
          </View>
       </View>
        <View style={styles.location}>
          <Text style={styles.locationText} >{location}</Text>
        </View>
        {/* Image wasn't working on smaller cards so turned off */}
        {/* <Image style={styles.image} source={{uri: imgSqSmall}}/> */}
        <Text style={styles.summary} >{summary}</Text>
      </TouchableOpacity>
      <View>
        <WeatherForecast latitude={latitude} longitude={longitude} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#126659',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  name: {
    alignItems: 'center',
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
    margin: 24,
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
});

export default SelectedItem;