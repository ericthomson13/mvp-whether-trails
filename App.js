import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeView from './screens/WelcomeView';
import MapView from './screens/MapView';

export default function App() {
  const [viewMode, setViewMode] = useState('welcomeView');
  const [outletOptions, setOutletOptions] = useState(['Hiking']);

  // switch operator for which view to render set up to render dynamically based on options in redux?

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text>Whether Trails</Text>
      </View>
      <View>
        <WelcomeView children={outletOptions} setViewMode={setViewMode} />      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    
  }
});
