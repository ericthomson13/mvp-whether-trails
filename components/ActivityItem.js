import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { Linking } from 'expo';

import WeatherForecast from './WeatherForecast';

// TODO: how to style if it is selected?
  // bigger and with weather and map space
const ActivityItem = ({ 
  index, name, summary, difficulty, imgSqSmall, stars, location, url, length, latitude, longitude, select, selected 
}) => {
  // how to update styling to change if selected????
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
        <Image style={styles.image} source={{uri: imgSqSmall}}/>
        <Text>{summary}</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
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

export default ActivityItem;