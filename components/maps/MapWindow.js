import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, } from 'react-redux';

const MapWindow = () => {
  const trails = useSelector((state) => state.activity.activityItems);
  const selectedIndex = useSelector((state) => state.activity.mapView);
  const selected = trails[selectedIndex];

  return (
    <View />
  );
};

const styles = StyleSheet.create({

});

export default MapWindow;