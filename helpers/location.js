import * as Location from 'expo-location';

/////////////////////////////////////
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
//////////////////////////////////////
const getUserLocationData = async () => {
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
  loc => {console.log(loc.coords)}
  )
  
  return loc;
}

export { getUserLocationData };
