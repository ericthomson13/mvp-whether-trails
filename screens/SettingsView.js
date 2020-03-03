import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import HomeButton from '../components/utility/HomeButton';

// TODO: make this functional and add to API calls

const SettingsView = () => {
  const units = useSelector((state) => state.settings.units);
  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.heading} >
          Settings:
        </Text>
      </View>
      <HomeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  heading: {

  },

});

export default SettingsView;