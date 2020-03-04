import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux';

import { setLocation, } from '../../store/actions/locationActions';
import { colors } from '../../Constants/Colors';

const CurrentLocation = ({ setShowList, showList, }) => {
  const currentLoc = useSelector((state) => state.location.deviceLocation);
  const dispatch = useDispatch();

  return (
    <View style={styles.currentLocView}>
      <TouchableOpacity onPress={() =>{ dispatch(setLocation(currentLoc)); setShowList(!showList)}} style={styles.currentLocButton}>
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
