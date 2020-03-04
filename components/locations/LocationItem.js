import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, SafeAreaView, } from 'react-native';
import { useDispatch, } from 'react-redux';

import { setLocation, } from '../../store/actions/locationActions';

const LocationItem = ({ name, latitude, longitude, }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => {dispatch(setLocation({ latitude, longitude })); dispatch(setScreen('welcomeView'));}}
      >
        <Text>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default LocationItem;