import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from 'expo-font';
import * as Font from "expo-font";

import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const fetchFonts = async () => {
    return Font.loadAsync({
        'GochiHand': require("../assets/fonts/GochiHand-Regular.ttf"),
        'ShareTechMono': require("../assets/fonts/ShareTechMono-Regular.ttf"),
    });
}; 

 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [fontsLoaded] = useFonts({
   'GochiHand': require("../assets/fonts/GochiHand-Regular.ttf"),
    'ShareTechMono': require("../assets/fonts/ShareTechMono-Regular.ttf"),
  });
  

  return (
    <View style={styles.container}> 
      <Text style = {styles.firstText}> Without a location, </Text>
      <Text style = {styles.setText}> Replay won't work. </Text>
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


      <StatusBar style="auto" />
      
      
    
    
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>OK, LET'S DO IT!</Text>
      </TouchableOpacity>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    //flex: 1,
   backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  firstText:{
    marginTop: 130,
    fontSize: 36,
   // fontFamily: 'GochiHand',
   fontWeight: 'bold',
   color: "#EE9B00",
  //color: 'white'
  },
   setText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#EE9B00",
   },

   secondaryText:{
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E9D8A6',
   },

   paragraphText:{
    fontSize:18,
    fontWeight: 'bold',
    color:'#E9D8A6',
   },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  finalText:{
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E9D8A6',
  },
 
  forgot_button: {
    height: 30,
  },
 
  loginBtn: {
    width: "81.7%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgb(255,255,255)',
    height: 50,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#A5A6F6",
    marginBottom: 400,
  },
  loginText: {
    fontWeight: "900",
  },
});