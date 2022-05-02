/////////////////////////////////////////////////////////
// Component: Marker design for each user displayed on map
//////////////////////////////////////////////////////////
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
export default function UserMarker({uri, latitude, longitude}){
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude
            }}
        >
            <View style={styles.albumImageContainer}>
            <Image
                source={{ 'uri': uri }}
                style={styles.albumImage}
            />
            </View>
        </Marker>
    )
}
const styles = StyleSheet.create({
    albumImageContainer: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 4,
        position: 'relative'
    },
    albumImage: {
        width: 14,
        height: 14,
        borderRadius: 14/2,
    }
});