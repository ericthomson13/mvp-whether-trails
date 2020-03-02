import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';

import { setLocation } from '../store/actions/locationActions';


import WelcomeView from './WelcomeView';
import MapView from './MapView';
import ActivityView from './ActivityView';

// TODO: rework setLocation into async action in locationActions
// TODO: rework to use native screens like router to work through screens rather than switch statement

const Main = () => {
  const viewMode = useSelector((state) => state.screen.screen);
  const location = useSelector((state) => state.location.location);
  const selectedActivity = useSelector((state) => state.activity.activity);

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
  
  // could this be refactored to useEffect?
  if (location === null) {
    getLocation();
  }


  // once more added might refactor to switch
  if (selectedActivity !== null && viewMode === 'welcomeView') {
    dispatch({ type: 'SET_SCREEN', payload: 'activityView' });
  };

  const map = (
    <MapView />
  );
  const activity = (
    <ActivityView location={location} />
  );
  const welcome = (
    <>
    <View style={styles.nav}>
        <Text style={styles.navText} >Whether Trails</Text>
        <Text style={styles.subtitle}>How to Find Trails and Their Weather Forecasts</Text>
    </View>
    <WelcomeView />
    </>
  );

  const error = (
    <View style={styles.errorView}>
      <Text style={styles.errorText}>Sorry an Error Has Occurred</Text>
      <Text style={styles.errorText}>Please come back later</Text>
    </View>
  );

  let screen = error;

  switch(viewMode) {
    case 'welcomeView':
      screen = welcome;
      break;
    case 'mapView':
      screen = map;
      break;
    case 'activityView':
      screen = activity;
      break;
    default:
      screen = error;
  };

  return (
    <View style={styles.container}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3cfb7',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    
  },
  nav: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  navText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9d3a48',
    alignContent: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#9d3a48',
    fontWeight: 'bold',
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

});

export default Main;
