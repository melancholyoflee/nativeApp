import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const ParkingMap = () => (
  <View style={styles.page}>
    <Text style={styles.text}>停車地圖</Text>
  </View>
);

const Camera = () => (
  <View style={styles.page}>
    <Text style={styles.text}>拍照</Text>
  </View>
);

const Attractions = () => (
  <View style={styles.page}>
    <Text style={styles.text}>景點</Text>
  </View>
);

export default function MainScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'parkingMap', title: '停車地圖', icon: 'map' },
    { key: 'camera', title: '拍照', icon: 'camera' },
    { key: 'attractions', title: '景點', icon: 'map-marker' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    parkingMap: ParkingMap,
    camera: Camera,
    attractions: Attractions,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
