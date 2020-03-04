import React from 'react';
import { View, Text, Flatlist, StyleSheet, } from 'react-native';

import { locations, } from '../../Constants/locations';
import LocationItem from './LocationItem';

const PopularDestinations = () => {
  const list = locations.map((location, i) => <LocationItem key={i} { ...location } />);
  return (
    <View>
      {list}
    </View>
  )
};

const styles = StyleSheet.create({

});

export default PopularDestinations;