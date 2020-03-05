import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Linking } from 'expo';

import { colors } from '../../Constants/Colors';
import { useSelector } from 'react-redux';

const MapViewButton = ({ latitude, longitude }) => {
  const location = useSelector((state) => state.location.location);

  const mapNav = Platform.select({
    ios: () => Linking.openURL(`maps://app?saddr=${location.latitude}+${location.longitude}&daddr=${latitude}+${longitude}`),
    android: () => Linking.openURL(`google.navigation:q=${latitude}+${longitude}`),
    web: () => Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`),
  });

  return (
    <View style={styles.goToMap} >
      <TouchableOpacity 
        onPress={mapNav}
      >
        <Text>
          Get Directions
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goToMap: {
    backgroundColor: colors.buttonBackground,
  },
  text: {
    color: colors.titleFont,
  }
})

export default MapViewButton;
