//////////////////////////////////////////////////////////
// Component: Marker design for each user displayed on map
//////////////////////////////////////////////////////////
import React from 'react';
import { StyleSheet } from 'react-native-web';
import { Marker } from 'react-native-maps';

export default function UserMarker({uri, latitude, longitude}){
    return (
        <Marker 
            coordinate={{
                latitude: latitude,
                longitude: longitude
            }}
        >
            {/*<Text>Enter design here</Text>*/}
        </Marker>
    )
}

const styles = StyleSheet.create({

});