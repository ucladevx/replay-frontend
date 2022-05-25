import React, { useState, useEffect } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { getUserLocationData } from '../helpers/location';
import * as Location from 'expo-location';

export default function Home() {
  const [pin, setPin] = useState ({
    latitude: 34.0689,
    longitude: -118.4452
  })

  const [ currentLongitude, setCurrentLongitude ] = useState(34.0689);
  const [ currentLatitude, setCurrentLatitude ] = useState(118.4452);

  useEffect(() => {
    (async () => {
      // let location = await getUserLocationData();
      // if (location !== "INVALID") {
      //   console.log(location.coords.latitude)
      //   console.log(location.coords.longitude)
      //   setCurrentLatitude(location.coords.latitude)
      //   setCurrentLongitude(location.coords.longitude)
      // }
      //check if user has granted location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Location permission denied! Allow location permissions in settings.')
        return "INVALID";
      }

      //fetch location data
      //let location = await Location.getCurrentPositionAsync({});
      let location = await Location.watchPositionAsync({
        accuracy:Location.Accuracy.High,
        timeInterval:10000,
        distanceInterval: 80,
      },
      location => {
        console.log('update location!', location.coords.latitude, location.coords.longitude)
        setCurrentLatitude(location.coords.latitude)
        setCurrentLongitude(location.coords.longitude);
      }
      )
    })();
  }, []);


  /*
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };*/

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
        <Marker 
          coordinate= {{
            latitude: currentLatitude,
            longitude: currentLongitude}}
          pinColor="blue"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinate)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
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
