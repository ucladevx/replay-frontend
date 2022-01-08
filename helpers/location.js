import * as Location from 'expo-location'; 

///////////////////////////////////////////////////////
// Grab user's current location data
// If permission granted, returns 
// Object {
//  "coords": Object {
//     "accuracy",
//     "altitude",
//     "altitudeAccuracy",
//     "heading",
//     "latitude",
//     "longitude",
//     "speed",
//   },
//   "timestamp",
// }
// More info: 
//  https://docs.expo.dev/versions/latest/sdk/location/
///////////////////////////////////////////////////////
const getUserLocationData = async () => {
  //check if user has granted location permissions
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Unable to update user location! Allow location permissions in settings.')
    return "INVALID";
  }

  //fetch location data
  let location = await Location.getCurrentPositionAsync({});
  return location;
}

export { getUserLocationData };
