import React from 'react';
import {
  View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { setScreen } from '../../store/actions/screenActions';

const SettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.settting}>
      <TouchableOpacity onPress={() => dispatch(setScreen('settingsView'))}>
        <MaterialCommunityIcons name="settings" size={12} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    padding: 10,
    margin: 10,
  },
});

export default SettingsButton;
