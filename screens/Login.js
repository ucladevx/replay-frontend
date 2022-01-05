import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import * as Font from "expo-font";
import { useFonts } from 'expo-font';

Font.loadAsync({
    GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
    ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf")
  })

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();
    
    let [fontsLoaded] = useFonts({
        'GochiHand': require("../assets/fonts/GochiHand-Regular.ttf"),
        'ShareTechMono': require("../assets/fonts/ShareTechMono-Regular.ttf")
      });
    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Text style={styles.back}>
                    Back 
                </Text>
                <Text style={styles.header}>
                    Sign In
                </Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username or Email"
                        placeholderTextColor="#000000"
                        onChangeText={(email) => setEmail(email)}
                        secureTextEntry={false}
                        onSubmitEditing={() => ref_input2.current.focus()}
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
                    <Text style={styles.loginText}>Log In</Text>
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
    back: { //probably need to change the location of the back to work for all screens?
        alignItems: 'stretch',
        justifyContent: 'center',
        fontFamily: 'GochiHand',
        position: 'absolute',
        width: 95,
        height: 20,
        left: 20,
        top: 50,
        fontSize: 24
    },
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30,
        fontFamily: 'GochiHand'
    },

    inputView: {
        backgroundColor: "#F8FDF4",
        borderRadius: 10,
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    textInput: {
        height: 50,
        fontSize: 20,
        flex: 1,
        fontFamily: 'ShareTechMono',
        textDecorationLine: 'underline',
    },

    forgot_button: {
        height: 30,
        marginBottom: 0,
        fontFamily: 'ShareTechMono'
    },

    sign_up_button: {
        height: 30,
        marginBottom: 30,
        fontFamily: 'ShareTechMono'
    },
     
    login_button: {
        width: "35%",
        borderWidth: 3,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#A5A6F6",
        fontFamily: 'ShareTechMono', //something about touchable opacity is making this hard to change
    },
  });