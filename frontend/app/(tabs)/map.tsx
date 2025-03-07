import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

export default function Map() {
	return (
		<View style={{ flex: 1 }}>
			<MapView style={StyleSheet.absoluteFill} />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

