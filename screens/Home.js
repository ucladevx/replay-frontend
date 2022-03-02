import React, { useState, useEffect } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { getUserLocationData } from '../helpers/location';
import UserMarker from '../components/UserMarker';
import StarMarker from '../components/StarMarker';

export default function Home() {
  //UCLA location
  const [pin, setPin] = useState ({
    latitude: 34.0689,
    longitude: -118.4452
  })

  const [ currentLongitude, setCurrentLongitude ] = useState(34.0689);
  const [ currentLatitude, setCurrentLatitude ] = useState(-118.4452);

  //upon mount, declare an interval that fetches and 
  //updates user location every 5 minutes
  useEffect(() => {
    const setUserCoords = async () => {
      let location = await getUserLocationData();
      if (location !== "INVALID") {
        setCurrentLatitude(location.coords.latitude);
        setCurrentLongitude(location.coords.longitude);
        console.log("User location successfully updated!")
        console.log("Longitude: " + location.coords.longitude);
        console.log("Lagitude: " + location.coords.latitude);
      }
    };

    setUserCoords();
    const interval = setInterval(() => {
      setUserCoords();
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        region={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        
        <StarMarker
          latitude={currentLatitude}
          longitude={currentLongitude}
        />
        
        <UserMarker 
          uri='https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg'
          latitude={currentLatitude+0.0005}
          longitude={currentLongitude+0.0005}
        />
        <UserMarker 
          uri='https://i1.sndcdn.com/artworks-7KF71PuNx8I9hAVt-eFlv5A-t500x500.jpg'
          latitude={currentLatitude}
          longitude={currentLongitude+0.0008}
        />
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
