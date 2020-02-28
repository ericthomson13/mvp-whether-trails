import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import WeatherForecast from './WeatherForecast';

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
        <Image style={styles.image} source={{uri: imgSqSmall}}/>
        <Text style={styles.summary} >{summary}</Text>
      </TouchableOpacity>
      
    </View>
  )
};

const styles = StyleSheet.create({
  card: {

  },
  header: {

  },
  name: {

  },
  name: {

  },
  dlContainer: {

  },
  difficulty: {

  },
  length: {

  },
  location: {

  },
  locationText: {

  },
  image: {

  },
  summary: {

  },
});

export default SelectedItem;