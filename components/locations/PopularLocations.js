import React, { useState, } from 'react';
import { View, ScrollView, StyleSheet, Text, } from 'react-native';

import { locations, } from '../../Constants/locations';
import LocationItem from './LocationItem';
import LocationListButton from './LocationListButton';
import { colors } from '../../Constants/Colors';

const PopularLocations = () => {
  const [showList, setShowList] = useState(false);

  const list = (
    <View>
      <View style={styles.popularTitle}>
        <Text style={styles.popularTitleText} >
          Popular Destinations:
        </Text>
      </View>
      <ScrollView style={styles.locationsList} horizontal={true}>
        {locations.map((location, i) => <LocationItem key={i} { ...location } setShowList={setShowList} />)}
      </ScrollView>
    </View>
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
  popularTitle: {

  },
  popularTitleText: {
    color: colors.other,
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationsList: {
    flexDirection: 'row',
  }
});

export default PopularLocations;