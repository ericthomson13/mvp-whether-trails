import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import MapWindow from '../components/maps/MapWindow';
import { setScreen } from '../store/actions/screenActions';

// TODO: get all trailhead locations rendering pin on map

const MapViewScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <MapWindow />
      <TouchableOpacity style={styles.return} onPress={() => dispatch(setScreen('activityView'))}>
        <Text style={styles.returnText}>
          Return to List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapViewScreen;
