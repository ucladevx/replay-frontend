import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Alert, Keyboard, Image, Modal } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


const fetchFonts = async () => {
    return Font.loadAsync({
        GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
    });
}; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();
    const [isChecked, setChecked] = useState(false);

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
                <Text style={styles.back}>
                    &lt;- Back 
                </Text>
                
                <View style={styles.title}>
                    <Text style={styles.header}>
                        Connect with a music platform of your choice!
                    </Text>
                </View>
                

                <TouchableOpacity style={styles.connect_spotify}>
                    <Text style={styles.connectSpotify}>CONTINUE WITH <Text style={styles.connectSpotifyGreen}>SPOTIFY</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.unavailable_connect}>
                    <Text style={styles.unavailableConnect}>CONTINUE WITH APPLE MUSIC</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.unavailable_connect}>
                    <Text style={styles.unavailableConnect}>CONTINUE WITH SOUNDCLOUD</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text 
                        style={styles.why_connect} 
                        onPress={
                            () => Alert.alert("Replay needs access to Spotify so you can explore what other users are listening to!", "")
                        }
                    >
                        Why connect?
                    </Text>
                    
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
    back: { 
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
        fontSize: 36,
        fontWeight: 'normal',
        marginBottom: 30,
        fontFamily: 'GochiHand',
        textAlign: "center"
    },

    inputView: {
        backgroundColor: "#F8FDF4",
        borderRadius: 10,
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {width:0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4
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
        marginTop:0,
        marginBottom: 0,
        fontFamily: 'ShareTechMono',
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
        marginBottom: 10,
        backgroundColor: "#A5A6F6",
        fontFamily: 'ShareTechMono', 
        shadowColor: "#000000",
        shadowOffset: {width:0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },

    loginText: {
        fontFamily: 'ShareTechMono',
        fontSize: 24,
        fontWeight: "400" //not working ugghhhh
    },
    checkbox: {
        backgroundColor: "#F22424",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 3,
        
    },

    //need to add a checkbox checked

    label: {
        fontFamily: 'ShareTechMono',
        fontSize: 20,
        marginLeft: 20,
        lineHeight: 23
    },

    connect_spotify: {
        backgroundColor: "#F8FDF4",
        borderRadius: 25,
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {width:0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    connectSpotify: {
        height: 50,
        fontSize: 18,
        flex: 1,
        fontFamily: 'ShareTechMono',
        color: "black",
        marginTop: 10
    },

    connectSpotifyGreen: {
        height: 50,
        fontSize: 18,
        flex: 1,
        fontFamily: 'ShareTechMono',
        color: "#1DBA54"
    },

    unavailable_connect: {
        backgroundColor: "#B27400",
        borderRadius: 25,
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {width:0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4
    },

    unavailableConnect: {
        height: 50,
        fontSize: 18,
        flex: 1,
        fontFamily: 'ShareTechMono',
        color: "#865700",
        marginTop: 10
    },

    why_connect: {
        height: 30,
        marginTop:0,
        marginBottom: 0,
        fontFamily: 'ShareTechMono',
        color: "#9B2226",
        marginTop: 40,
        fontSize: 20
    },
    title: {
        width: 302,
        alignItems: "center",
        marginBottom: 20
    }
});