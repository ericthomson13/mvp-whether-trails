import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';

import TextButton from '../components/utility/TextButton';

import PopularLocations from '../components/locations/PopularLocations';
import { colors } from '../Constants/Colors';
import { setSelectedActivity, } from '../store/actions/activityActions';
import { setScreen, } from '../store/actions/screenActions';

const WelcomeView = () => {
  const children = useSelector((state) => state.activity.activityOptions);
  const location = useSelector((state) => state.location.location);
  const dispatch = useDispatch();
  const activitySelector = (name) => {dispatch(setSelectedActivity(name)); dispatch(setScreen('activityView'));};
  
  return (
    <View style={styles.container} >
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
        <View style={styles.optionsList}>
          <ScrollView  >
            {children.map((option, i) => {
              return (
                <TextButton 
                  press={() => activitySelector(option.name)} 
                  name={option.name} 
                  style={[null, null, null]} 
                  key={i} 
                  style={buttonStyle}
                />
              );
            })}
          </ScrollView>
          <View style={styles.popularLocations}>
            <PopularLocations />
          </View>
        </View>
      </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    maxHeight: '95%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  welcomeView: {
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
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.buttonBackground,
    borderBottomWidth: 3,
    borderRadius: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    maxWidth: 350,
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
  optionsList: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  }
});

const buttonStyle = StyleSheet.create({
    container: {
      alignContent: 'center',
      justifyContent: 'center',
      padding: 5,
      margin: 5,
      maxWidth: 200,
    },
    button: {
      backgroundColor: colors.buttonBackground,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    text: {
      borderColor: colors.normalItem,
      color: colors.buttonTextColor,
      fontSize: 18,
      padding: 5,
      margin: 5,
    },
})
export default WelcomeView;
