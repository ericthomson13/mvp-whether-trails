/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Linking } from 'expo';

import DifficultyIcon from './DifficultyIcon';
import colors from '../../Constants/Colors';

const NormalItem = ({
  setWeatherDisplay,
  url,
  name,
  difficulty,
  length,
  location,
  summary,
}) => (
  <View
    style={styles.card}
  >
    <TouchableOpacity
      onPress={() => setWeatherDisplay(true)}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text style={styles.name}> {name} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dlContainer}>
        <DifficultyIcon difficulty={difficulty} />
        <Text style={styles.length}>
          {length} mi
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <Text>{summary}</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.buttonBackground,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  name: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.normalItem,
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
    width: '100%',
    borderBottomWidth: 2,
    padding: 5,
    margin: 5,

  },
  dlContainer: {
    padding: 10,
    flexDirection: 'row',
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
    color: colors.normalItem,
    fontWeight: 'bold',
  },
  location: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,

  },
  locationText: {
    color: colors.normalItem,
    fontWeight: 'bold',
  },
});

export default NormalItem;
