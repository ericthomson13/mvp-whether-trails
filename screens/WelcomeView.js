import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, } from 'react-redux';


import OptionButton from '../components/utility/OptionButton';
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
        <Text style={styles.currentTitle}>Current Location</Text>
        <View style={styles.latLongView}>
          <Text style={styles.latLongText} >Latitude:  {location.latitude}  Longitude:  {location.longitude}</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '75%',
  },
  welcomeTitle: {
    padding: 10,
    color: colors.titleFont,
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.titleFont,
  },
  nav: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderColor: colors.buttonBackground,
    borderBottomWidth: 3,
    borderRadius: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
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
    padding: 3,
    margin: 3,
  },
  latLongText: {
    fontSize: 18,
    color: colors.titleFont,
    fontWeight: 'bold',
  },
  popularLocations: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentTitle: {
    color: colors.titleFont,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: colors.titleFont,
    borderBottomWidth: 2,
  },
  latLongView: {
    padding: 2,
    margin: 4,
  },
});

export default WelcomeView;
