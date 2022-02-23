import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = async () => {
  return Font.loadAsync({
    GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
    ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
  });
}; 
 
export default function LocationPermissionPopup() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />

      <Text style = {styles.firstText}> Without a location, </Text>
      <Text style = {styles.firstText}> Replay won't work. </Text>
      <Text style = {styles.secondaryText}>HOW REPLAY WORKS </Text>
      <Text style = {styles.paragraphText}> Enabling location access will provide us</Text> 
      <Text style = {styles.paragraphText}> the ingredients needed to let you</Text>
      <Text style = {styles.paragraphText}> discover new music based on where you</Text>  
      <Text style = {styles.paragraphText}> are located. By changing the music</Text> 
      <Text style = {styles.paragraphText}> suggestion paradigm from similarity to</Text> 
      <Text style = {styles.paragraphText}> location-based, we're making it easier</Text> 
      <Text style = {styles.paragraphText}> than ever for you to discover new and</Text> 
      <Text style = {styles.paragraphText}> amazing music!</Text> 

      <Text style = {styles.secondaryText}> LISTEN IN PEACE </Text>
      <Text style = {styles.paragraphText}> We do not share location or music data</Text> 
      <Text style = {styles.paragraphText}> with anyone. All personal information</Text>
      <Text style = {styles.paragraphText}> is kept private and secure</Text>  
      
      <Text style = {styles.finalText}> WILL You Enable Us To Access Your</Text> 
      <Text style = {styles.paragraphText}> Location?</Text>  
    
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>OK, LET'S DO IT!</Text>
      </TouchableOpacity>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  firstText:{
    fontSize: 36,
    fontFamily: 'GochiHand',
    fontWeight: 'bold',
    color: "#EE9B00",
  },
  secondaryText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E9D8A6',
  },

  paragraphText: {
    fontSize:18,
    fontWeight: 'bold',
    color:'#E9D8A6',
  },
 
  finalText:{
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E9D8A6',
  },

  loginBtn: {
    width: "81.7%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#A5A6F6",
  },
  loginText: {
    fontFamily: 'ShareTechMono',
    fontSize: 20
  },
});