import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFonts = async () => {

    return Font.loadAsync({
        GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
        
      });
}; 
 


export default function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();    //what does this do?

    
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
                    <Text style={styles.header}>
                        Sign Up
                    </Text>
    
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            placeholderTextColor="#000000"
                            onChangeText={(email) => setEmail(email)}
                            secureTextEntry={false}
                            onSubmitEditing={() => ref_input2.current.focus()}      //what does this do?
                        />
                    </View>
                  

                    
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            placeholderTextColor="#000000"
                            onChangeText={(username) => setUsername(username)}
                            secureTextEntry={false}
                            onSubmitEditing={() => ref_input2.current.focus()}      //what does this do?
                        />
                    </View>
    
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor="#000000"
                            secureTextEntry
                            onChangeText={(password) => setPassword(password)}
                            ref={ref_input2}
                        />
                    </View>
    
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.login_button}>
                        <Text style={styles.loginText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE9B00',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: 'GochiHand',
    },

    inputView: {
        backgroundColor: "#F8FDF4",
        borderRadius: 10,
        width: 322,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 1, 
        flexDirection:'row',
        paddingLeft: 10,
    },

    textInput: {
        height: 50,
        flex: 1,
        fontSize: 20,
        fontFamily: 'ShareTechMono', 
        color: '#000000',
        textDecorationLine: 'underline',
        textAlign: "left",
        
    },

    forgot_button: {
        height: 30,
        marginBottom: 0,
    },

    sign_up_button: {
        height: 30,
        marginBottom: 30,
    },
     
    login_button: {
        width: 179,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#A5A6F6",
        borderWidth: 3,
    },


    loginText: {
        fontFamily: 'ShareTechMono', 
        fontSize: 24,
        fontWeight: "bold",
    },



  });