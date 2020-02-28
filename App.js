import React, { useState, } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import WelcomeView from './screens/WelcomeView';
import MapView from './screens/MapView';
import ActivityView from './screens/ActivityView';

// TODO: look into refactoring to Redux and how to test Redux and Native
// TODO: how to change splash icon to something else

export default function App() {
  const [viewMode, setViewMode] = useState('welcomeView');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState(null);
  const defaultLocation = {
    latitude: '40.0150',
    longitude: '-105.2705'
  };

  // below is for iOS but currently causes erros in html and android
  // geolocation.requestAuthorization();
  // Geolocation.setRNConfiguration('whenInUse');

  const getLocation = async () => {
    // not working on chrome because not https
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        Location.requestPermissionsAsync();
        setDeviceLocation(null);
        console.log('error, please restart and allow location permissions');
      } else {
        let location = await Location.getCurrentPositionAsync({timeout: 10000});
        setDeviceLocation(location.coords);
      }
    } catch {
      console.log('error in getLocation ', deviceLocation);
    }
  };
  
  // could this be refactored to useEffect?
  if (deviceLocation === null) {
    getLocation();
  }
  const activityOptions = [
    {    
      name:'Hiking'
    },  
  ];

  // once more added might refactor to switch
  if (selectedActivity !== null && viewMode === 'welcomeView') {
    setViewMode('activityView');
  };

  const map = (
    <MapView />
  );
  const activity = (
    <ActivityView location={deviceLocation !== null ? deviceLocation : defaultLocation} />
  );
  const welcome = (
    <>
    <View style={styles.nav}>
        <Text style={styles.navText} >Whether Trails</Text>
        <Text style={styles.subtitle}>How to Find Trails and Their Weather Forecasts</Text>
    </View>
    <WelcomeView children={activityOptions} setSelectedActivity={setSelectedActivity} />
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
