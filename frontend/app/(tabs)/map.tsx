import React, { useEffect, useRef, useState } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import * as Location from 'expo-location';
import { markers } from '../../assets/markers';

const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2
};

export default function App() {
    const mapRef = useRef<MapView>(null);
    const navigation = useNavigation();
    const [location, setLocation] = useState<Region | null>(null);

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant location permissions");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            const region = {
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            };
            setLocation(region);
            mapRef.current?.animateToRegion(region);
        };
        getPermissions();
    }, []);

    const calloutPressed = (ev: any) => {
        console.log(ev);
    };

    const onRegionChange = (region: Region) => {
        console.log(region);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                onRegionChangeComplete={onRegionChange}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        title={marker.name}
                        coordinate={marker}
                    >
                        <Callout onPress={calloutPressed}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 46 }}>test</Text>
                                <Image
                                    source={require('../../assets/images/test.jpg')} 
                                    style={styles.calloutImage}
                                />
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    calloutImage: {
        width: 120,
        height: 80,
        backgroundColor: '#ccc' // Placeholder background color
    },
});