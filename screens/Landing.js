import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


const fetchFonts = async () => {

    return Font.loadAsync({
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
        Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
      });
}; 


export default function Landing() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();


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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style='auto' />
                
                <View styles = {styles.uppercontainer}>
                        <Text style={styles.header1}>
                            Replay
                        </Text>
                        
                        <Text style={styles.header2}>
                            Replay
                        </Text>
                        <Text style={styles.header3}>
                            Replay
                        </Text>
                        <Text style={styles.header4}>
                            Replay
                        </Text>
                    

                    <Text style = {styles.slogan}>--slogan--</Text> 
                </View>
                

                <View style= {styles.lowercontainer}>
                    <Text style = {styles.terms}>By signing up for Replay, you agree to our Terms of Service.</Text>   
                    {/* terms of service will need to probably be a hyperlink to that, needs to be styled? */}
                

                    <TouchableOpacity style={styles.create_account}>
                        <Text style={styles.createText}>Create Account</Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Text style={styles.sign_in}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9B2226',
        alignItems: 'center',
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        justifyContent: 'center',
        
    },
    uppercontainer: {
        alignItems: 'center',
        //position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: 10,
        
    },


    header1: {
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'Pacifico',         
        color: '#0A9396',       //orange
        position: 'absolute',
        top: 135,
        margin: 0, 
    },

    header2: {
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#94D2BD',
        margin: 0, 
        position: 'absolute',
        top: 139,
       
        
    },

    header3: {
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#E9D8A6',
        margin: 0, 
        position: 'absolute',
        top: 143,
       
      
        
    },

    header4: {
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#EE9B00',       //blue
        margin: 0, 
        position: 'absolute',
        top: 143,
       
        
       
    },

    

    lowercontainer: {
        alignItems: 'center',
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        padding: 40, 
        
    },

    slogan: {
        color:'#E9D8A6',
        fontFamily: 'ShareTechMono', 
        fontSize: 20,
        

    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    textInput: {
        height: 50,
        flex: 1,
    },

    forgot_button: {
        height: 30,
        marginBottom: 0,
    },

    sign_up_button: {
        height: 30,
        marginBottom: 30,
    },
     
    create_account: {
        width: 295,
        borderRadius: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#E9D8A6",
        borderWidth: 3,
        marginBottom: 10,

    },

    terms: {
        marginTop: 500,
        fontFamily: 'ShareTechMono',
        color: '#94D2BD',
        fontSize: 12,
        textAlign:'center',

    },

    sign_in: {
        fontFamily: 'ShareTechMono', 
        fontSize: 24,
        color: '#E9D8A6',
        fontWeight: "bold",
        

    },

    createText: {
        fontFamily: 'ShareTechMono', 
        fontSize: 24,
        fontWeight: '400',  //doesn't change might have to get bold style 
    },
  });