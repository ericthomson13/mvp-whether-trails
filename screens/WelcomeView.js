import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, } from 'react-redux';


import OptionButton from '../components/utility/OptionButton';
import SearchBar from '../components/utility/SearchBar';

const WelcomeView = () => {
  const children = useSelector((state) => state.activity.activityOptions);

  return (
    <View>
      <View style={styles.nav}>
        <Text style={styles.navText} >Whether Trails</Text>
        <Text style={styles.subtitle}>How to Find Trails and Their Weather Forecasts</Text>
      </View>
      <View style={styles.welcomeView}>
        <View>
          <SearchBar />
        </View>
        <Text style={styles.welcomeTitle}>
          Select an Activity
        </Text>
        <View>
          <ScrollView style={styles.optionsList} >
            {children.map((option, i) => {
              return (
                <OptionButton key={i} name={option.name} />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    padding: 10,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: '75%',
  },
  welcomeTitle: {
    padding: 10,
    color: '#9d3a48',
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center'
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
});

export default WelcomeView;
