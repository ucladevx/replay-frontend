import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function Landing() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Text style={styles.header}>
                    Replay
                </Text>

                <Text style = {styles.slogan}>--slogan--</Text>


                <Text>By signing up for Replay, you agree to our Terms of Service.</Text>   
                {/* terms of service will need to probably be a hyperlink to that, needs to be styled */}
                

                <TouchableOpacity style={styles.create_account}>
                    <Text style={styles.createText}>Create Account</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={styles.sign_in}>Sign In</Text>
                </TouchableOpacity>



            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9B2226',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30
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
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#E9D8A6",
        borderWidth: 3,
    },

    sign_in: {
        fontFamily: 'ShareTechMono', 
        fontSize: 20,
        color: '#E9D8A6',
        

    },

    createText: {
        fontFamily: 'ShareTechMono', 
        fontSize: 24,
        fontWeight: "bold",
    },
  });