// import React from 'react';
// import { View, Text, StyleSheet, Platform, } from 'react-native';
// import { useSelector, } from 'react-redux';

// // TODO: get maps rendering with pin for where selected is
// // this allows to not break in web because react-native-web-maps not working well 2MAR2020

// let MapView = null;
// Platform.OS === 'web' ? null :  MapView = require('react-native-maps');

// const MapWindow = () => {
//   const trails = useSelector((state) => state.activity.activityItems);
//   const selectedIndex = useSelector((state) => state.activity.mapView);
//   const selected = trails[selectedIndex];

//   if (!MapView) {
//     const map = null;
//   } else {
//     const map = <MapView />
//   }
//   if (MapView !== null) {
//     return (
//       <View>
//         {map}
//       </View>
//     );
//   }
//   return null;
// }

// const styles = StyleSheet.create({
//   map: {}
// });

// export default MapWindow;
