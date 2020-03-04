import React, { useState, } from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';

import { locations, } from '../../Constants/locations';
import LocationItem from './LocationItem';
import LocationListButton from './LocationListButton';

const PopularLocations = () => {
  const [showList, setShowList] = useState(false);

  const list = (
    <ScrollView style={styles.locationsList} >
      {locations.map((location, i) => <LocationItem key={i} { ...location } />)}
    </ScrollView>
  );
  const button = <LocationListButton setShowList={setShowList} showList={showList} />;

  return (
    <View style={styles.container} >
      {showList ? list : null}
      {button}
    </View> 
  )
};

const styles = StyleSheet.create({
  container: {

  },
  locationsList: {

  },
  toggleListButton: {

  }
});

export default PopularLocations;