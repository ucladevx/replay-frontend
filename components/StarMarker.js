/////////////////////////////////////////////
// Component: Marker design for the main user
/////////////////////////////////////////////
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
export default function StarMarker({latitude, longitude}){
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude
            }}
        >
            <Image
                source={require("../assets/starMarker.png")}
                style={styles.star}
            />
        </Marker>
    )
}
const styles = StyleSheet.create({
    star: {
        width: 32,
        height: 32,
    }
});