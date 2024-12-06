import React, { useState, useEffect } from 'react';
import {Text, Button, Image, View, StyleSheet ,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BottomNavigation } from 'react-native-paper';
import CameraPage from './Camera';

function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const ParkingMap = () => (
  <View style={styles.page}>
    <Text style={styles.text}>停車地圖</Text>
  </View>
);

const Camera = () => (
  ImagePickerExample()
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
    camera: CameraPage,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
