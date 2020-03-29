/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  View, ScrollView, StyleSheet, Text,
} from 'react-native';

import locations from '../../Constants/locations';
import colors from '../../Constants/Colors';

import CurrentLocation from './CurrentLocation';
import LocationItem from './LocationItem';
import TextButton from '../utility/TextButton';

// TODO: resolve Close List text display

const PopularLocations = () => {
  const [showList, setShowList] = useState(false);

  const list = (
    <View>
      <View style={styles.popularTitle}>
        <Text style={styles.popularTitleText}>
          Popular Destinations:
        </Text>
      </View>
      <ScrollView style={styles.locationsList} horizontal>
        {locations.map((location, i) => <LocationItem key={i} {...location} setShowList={setShowList} />)}
      </ScrollView>
    </View>
  );

  const toggleButton = (
    <TextButton
      press={() => setShowList(!showList)}
      name={showList ? 'Close List' : 'See Popular Desinations'}
      style={buttonStyles}
    />
  );

  const currentLocButton = showList ? <CurrentLocation setShowList={setShowList} showList={showList} /> : null;

  return (
    <View style={styles.container}>
      {showList ? list : null}
      {toggleButton}
      {currentLocButton}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  popularTitle: {

  },
  popularTitleText: {
    color: colors.other,
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationsList: {
    flexDirection: 'row',
  },
});

const buttonStyles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    backgroundColor: colors.other,
    padding: 3,
    borderRadius: 10,
  },
  text: {
    color: colors.buttonTextColor,
    fontSize: 14,
    padding: 5,
    margin: 2,
  },
});

export default PopularLocations;
