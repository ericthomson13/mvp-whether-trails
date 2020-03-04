import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from 'react-native';
import { useDispatch, } from 'react-redux';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, } from '../../Constants/Colors';

const SearchBar = () => { 
  const [searchInput, setSearchInput] = useState('City, State');
  const [displayBar, setDisplayBar] = useState(false);

  const dispatch = useDispatch();

  const bar = (
    <View style={styles.searchBar}>
      <TextInput onChangeText={(text) => setSearchInput(text)} value={searchInput} />
      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons name='search-web' size={20} color='black'/>
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
  }
});

export default SearchBar;