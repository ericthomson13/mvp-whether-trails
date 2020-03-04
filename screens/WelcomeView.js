import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, } from 'react-redux';


import OptionButton from '../components/utility/OptionButton';
// import SearchBar from '../components/utility/SearchBar';
import PopularLocations from '../components/locations/PopularLocations';
import { colors } from '../Constants/Colors';

const WelcomeView = () => {
  const children = useSelector((state) => state.activity.activityOptions);
  const location = useSelector((state) => state.location.location);

  return (
    <View>
      <View style={styles.nav}>
        <Text style={styles.navText} >Whether Trails</Text>
        <Text style={styles.subtitle}>How to Find Trails and Their Weather Forecasts</Text>
      </View>
      <View style={styles.currentLocation} >
        <Text style={styles.latLongText} >Latitude:  {location.latitude}  Longitude:  {location.longitude}</Text>
      </View>
      <View style={styles.welcomeView}>
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
        <View style={styles.popularLocations}>
          <PopularLocations />
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
    color: colors.titleFont,
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
    color: colors.titleFont,
    alignContent: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.titleFont,
    fontWeight: 'bold',
  },
  currentLocation: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    margin: 5,
  },
  latLongText: {
    fontSize: 18,
    color: colors.titleFont,
    fontWeight: 'bold',
  },
  popularLocations: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default WelcomeView;
