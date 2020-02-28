import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

const ActivityItem = ({ id, name, summary, difficulty, stars, location, url, length, latitude, longitude, }) => {
  return (
    <View style={styles.card} >
      <View style={styles.header} >
        <TouchableOpacity>
          <Text style={styles.name} onPress={()=> Linking.openURL(url)}>{name}</Text>
        </TouchableOpacity>
        <Text >{difficulty}</Text>
      </View>
      
        <Text>{summary}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#126659',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  name: {
    alignItems: 'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    
    // color: '#9D3A48',
  },
  difficulty: {
    alignItems: 'center',
    fontSize: 14,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',

  },

  summary: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '75%',

  },
  
  url: {

  },
  length: {

  }
});

export default ActivityItem;