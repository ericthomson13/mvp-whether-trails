import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import openMap from 'react-native-open-maps';
import { Linking } from 'expo';

const MapViewButton = ({ latitude, longitude }) => {
  const mapNav = Platform.select({
    ios: () => openMap({ latitude, longitude, navigate_mode: 'navigate' }),
    android: () => openMap({ latitude, longitude, navigate_mode: 'navigate' }),
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
    backgroundColor: '#126659',
  },
  text: {
    color: '#9D3A48',
  }
})

export default MapViewButton;
