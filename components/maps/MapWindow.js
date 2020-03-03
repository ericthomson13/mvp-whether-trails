import React from 'react';
import { View, Text, Dimensions, StyleSheet, Platform, } from 'react-native';
import { useSelector, } from 'react-redux';

// this allows to not break in web because react-native-web-maps not working well 2MAR2020
  
let MapView = null;
Platform.OS === 'web' ? null :  MapView = require('react-native-maps');

const MapWindow = () => {
  const trails = useSelector((state) => state.activity.activityItems);
  const selectedIndex = useSelector((state) => state.activity.mapView);
  const selected = trails[selectedIndex];

  if (MapView !== null) {
    return (
      <View>
        <MapView style={styles.map} />
      </View>
    );
  }
  return null;  
}

const styles = StyleSheet.create({

});

export default MapWindow;