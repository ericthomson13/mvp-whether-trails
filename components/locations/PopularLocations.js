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
import LocationListButton from './LocationListButton';

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
  const toggleButton = <LocationListButton setShowList={setShowList} showList={showList} />;
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

export default PopularLocations;
