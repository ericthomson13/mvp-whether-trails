/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { setLocation } from '../../store/actions/locationActions';
import { colors } from '../../Constants/Colors';

const LocationItem = ({
  name,
  latitude,
  longitude,
  setShowList,
}) => {
  const dispatch = useDispatch();
  const location = { latitude, longitude };
  return (
    <View style={styles.locationItemView}>
      <TouchableOpacity
        onPress={() => { dispatch(setLocation(location)); setShowList(false); }}
        style={styles.locationItemButton}
      >
        <Text style={styles.locationItemText}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  locationItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  locationItemButton: {
    backgroundColor: colors.buttonBackground,
    padding: 3,
    borderRadius: 10,
  },
  locationItemText: {
    color: colors.buttonTextColor,
    fontSize: 14,
    padding: 5,
    margin: 2,
  },
});

export default LocationItem;
