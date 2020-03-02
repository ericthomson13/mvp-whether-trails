import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch ,} from 'react-redux';

import MapWindow from '../components/maps/MapWindow';
import { setScreen, } from '../store/actions/screenActions';

// TODO: get all trailhead locations rendering pin on map

const MapView = () => {
  const dispatch = useDispatch();
  const trails = useSelector((state) => state.activity.activityItems);
  const selectedIndex = useSelector((state) => state.activity.mapView);
  const selected = trails[selectedIndex];
  
  return (
    <View>
      <MapWindow />
      <TouchableOpacity style={styles.return} onPress={() => dispatch(setScreen('activityView'))}>
        <Text style={styles.returnText} >
          Return to List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  return: {

  },
  returnText: {

  },
});

export default MapView;