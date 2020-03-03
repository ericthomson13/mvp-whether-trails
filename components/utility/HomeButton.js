import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { useDispatch, } from 'react-redux';
import { setScreen } from '../../store/actions/screenActions';
import { setSelectedActivity, updateActivityArr, } from '../../store/actions/activityActions';

const HomeButton = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container} >
      <TouchableOpacity 
        onPress={() => {
          dispatch(setScreen('welcomeView')); 
          dispatch(setSelectedActivity(null)); 
          dispatch(updateActivityArr(null));
        }}
        style={styles.button}
      >
        <Text style={styles.text} >Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#126659',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  text: {
    color: '#BFD1E5',
    fontWeight: 'bold',
  }
});

export default HomeButton;