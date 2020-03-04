import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from 'react-native';
import { useDispatch, } from 'react-redux';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, } from '../../Constants/Colors';
import { setSearchLocation, } from '../../store/actions/locationActions';

const SearchBar = () => {
  const [latInput, setLatInput] = useState('');
  const [longInput, setLongInput] = useState('');
  const [displayBar, setDisplayBar] = useState(false);

  const dispatch = useDispatch();

  const checkValidLatLong = (latitude, longitude) => {
    if (latitude > 90 || latitude < -90) return;
    if (longitude > 180 || longitude < -180) return;
    dispatch(setSearchLocation({latitude, longitude}));
  };

  const bar = (
    <View style={styles.searchBar}>
      <View style={styles.searchBarView}>
        <TextInput 
          style={styles.searchBarInput} 
          onChangeText={(text) => setLatInput(text)} 
          value={latInput} 
          blurOnSubmit={true} 
          placeholder='Latitude'
          keyboardType='number-pad'
          keyboardAppearance='dark'
          placeholderTextColor={colors.buttonTextColor}
        />
      </View>
      <View style={styles.searchBarView}>
        <TextInput 
          style={styles.searchBarInput} 
          onChangeText={(text) => setLongInput(text)} 
          value={longInput} 
          blurOnSubmit={true} 
          placeholder='Longitude'
          keyboardType='number-pad'
          keyboardAppearance='dark'
          placeholderTextColor={colors.buttonTextColor}
        />
      </View>
      <View style={styles.searchButton} >
        <TouchableOpacity onPress={() => {checkValidLatLong(latInput, longInput)}} >
          <MaterialCommunityIcons name='search-web' size={20} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayBar(!displayBar)} style={styles.closeButton}>
          <Text style={styles.closeText}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const button = (
    <View style={styles.toggleView}>
      <TouchableOpacity onPress={() => setDisplayBar(!displayBar)}>
        <Text style={styles.toggleText}>
          Search Somewhere Else
        </Text>
      </TouchableOpacity>
    </View>
  );
  return displayBar ? bar : button
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBackground,
    borderRadius: 10,
  },
  toggleText: {
    color: colors.buttonTextColor,
    fontWeight: 'bold',
    padding: 12,
    fontSize: 20,
  },
  searchBarView: {
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
  },
  searchBarInput: {
    padding: 5,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    flexDirection: 'row',
  },
  closeButton: {
    backgroundColor: colors.buttonBackground,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  closeText: {
    color: colors.buttonTextColor,
    padding: 2,
  }
});

export default SearchBar;