import React, { useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';

export default function App() {
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("camera permission refused!");
      return;
    }
    
    const result = await ImagePicker.launchCameraAsync();
    
    console.log(result);
    
    // if (!result.cancelled) {
    //   Alert.alert('Image Selected', `Image URI: ${result.uri}`);
    // }
  };

  useFocusEffect(
    useCallback(() => {
      openCamera();
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* You can add any other UI components here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161719',
    alignItems: 'center',
    justifyContent: 'center',
  },
});