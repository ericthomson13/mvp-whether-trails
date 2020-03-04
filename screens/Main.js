import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setLocation } from '../store/actions/locationActions';
import { setScreen } from '../store/actions/screenActions';

import WelcomeView from './WelcomeView';
import MapViewScreen from './MapViewScreen';
import ActivityView from './ActivityView';
import SettingsView from './SettingsView';
import { colors } from '../Constants/Colors';

// TODO: rework setLocation into async action in locationActions
// TODO: rework to use native screens like router to work through screens rather than switch statement

const Main = () => {
  const viewMode = useSelector((state) => state.screen.screen);
  const location = useSelector((state) => state.location.location);

  const dispatch = useDispatch();

  const getLocation = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        Location.requestPermissionsAsync();
        console.log('error, please restart and allow location permissions');
      } else {
        let location = await Location.getCurrentPositionAsync({timeout: 10000});
        dispatch(setLocation(location));
      }
    } catch {
      console.log('error in getLocation ');
    }
  };
  
  useEffect(() => {
    if (location === null) {
      getLocation();
    }
  });

  let screen;
  switch(viewMode) {
    case 'welcomeView':
      screen = <WelcomeView />;
      break;
    case 'mapView':
      screen = <MapViewScreen />;
      break;
    case 'activityView':
      screen = <ActivityView location={location} />;
      break;
    case 'settingsView':
      screen = <SettingsView />;
      break;
    default:
      screen = (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Sorry an Error Has Occurred</Text>
          <Text style={styles.errorText}>Please come back later</Text>
        </View>
      );
  };

  return (
    <View style={styles.container}>
      {screen}
      <View style={styles.settting} >
        <TouchableOpacity onPress={() => dispatch(setScreen('settingsView'))} >
          <MaterialCommunityIcons name='settings' size={12} color='black'/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  errorText: {
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'lucia grande'
  },
  errorView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    maxWidth: '80%',
  },
  setting: {
    padding: 10,
    margin: 10,
  },
});

export default Main;
