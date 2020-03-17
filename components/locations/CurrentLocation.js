/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation } from '../../store/actions/locationActions';
import colors from '../../Constants/Colors';

const CurrentLocation = ({ setShowList, showList, }) => {
  const currentLoc = useSelector((state) => state.location.current);
  const defaultLoc = useSelector((state) => state.location.default);
  const dispatch = useDispatch();

  return (
    <View style={styles.currentLocView}>
      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line no-extra-boolean-cast
          if (!!currentLoc) {
            dispatch(setLocation(currentLoc));
          } else {
            dispatch(setLocation(defaultLoc));
          }
          setShowList(!showList);
        }}
        style={styles.currentLocButton}
      >
        <Text style={styles.currentLocText}>
          Use Current Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  currentLocView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  currentLocButton: {
    backgroundColor: colors.other,
    padding: 3,
    borderRadius: 10,
  },
  currentLocText: {
    color: colors.buttonTextColor,
    fontSize: 14,
    padding: 5,
    margin: 2,
  },
});

export default CurrentLocation;
