import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { useDispatch, } from 'react-redux';

import { setLocation, } from '../../store/actions/locationActions';

const LocationItem = ({ name, latitude, longitude, setShowList }) => {
  const dispatch = useDispatch();
  const location = { latitude, longitude}
  return (
    <View>
      <TouchableOpacity 
        onPress={() => {dispatch(setLocation(location)); setShowList(false);}}
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