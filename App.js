import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeView from './screens/WelcomeView';
import MapView from './screens/MapView';
import TrailheadView from './screens/TrailheadView';

export default function App() {
  const [viewMode, setViewMode] = useState('welcomeView');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const activityOptions = [
    {    
      name:'Hiking'
    },  
  ];
  const map = (
    <MapView />
  );
  const trailhead = (
    <TrailheadView />
  )
  const welcome = (
        <WelcomeView children={activityOptions} setSelectedActivity={setSelectedActivity} />      
  );

  const error = (
    <View style={styles.errorView}>
      <Text style={styles.errorText}>Sorry an Error Has Occurred</Text>
      <Text style={styles.errorText}>Please come back later</Text>
    </View>
  )

  let screen = error;
  switch(viewMode) {
    case 'welcomeView':
      screen = welcome;
      break;
    case 'mapView':
      screen = map;
      break;
    case 'trailheadView':
      screen = trailhead;
      break;
    default:
      screen = error;
  }
  console.log('selectedActivity: ', selectedActivity)
  // switch operator for which view to render set up to render dynamically based on options in redux?

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText} >Whether Trails</Text>
      </View>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  nav: {
    padding: 10,
    fontFamily: '20',
    
  },
  navText: {

  },
  errorText: {
    alignContent: 'center',
    // justifyContent: 'center',
    fontFamily: 'lucia grande'
  },
  errorView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    maxWidth: '80%',
  },

});
