import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Image,ImageBackground, Animated, Easing, LayoutAnimation, TouchableOpacity, Text, StyleSheet} from 'react-native';


 
export default function App() {
    const [spinAnim, setSpinAnim] = useState (new Animated.Value(0));
    const spin = spinAnim.interpolate({inputRange: [0,1], outputRange: ['0deg', '360deg'],});

    useEffect (() => {
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDrive: true,
        }),
      ).start();
    });
  

  return (
    <View style={styles.container}> 
      <ImageBackground 
      source =  {require('../assets/Diagram - Replay-3.png')}
      style = {styles.first} >
      
      

      <ImageBackground 
      source = {require('../assets/Diagram - Replay.png')}
      style= {styles.third}>

      
      </ImageBackground>

      <Animated.Image 
      source = {require('../assets/Diagram - Replay-2.png')}
      style= {{height: 197, width: 197, transform: [{rotate: spin}] }}>

      </Animated.Image>

      

      </ImageBackground>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    //flex: 1,
   backgroundColor: "#E9D8A6",
    alignItems: "center",
    justifyContent: "center",
  },
  first:{
    width: 308,
   height: 308,
    marginLeft: 63,
    marginTop: 294,
    justifyContent: "center",
   // fontFamily: 'GochiHand',
  //color: 'white'
  },

  second:{
    width: 197,
    height: 197,
   // transform: [{rotate: spin}],
  },

  third: {
    width: 137,
    height: 197,

  },
  
});