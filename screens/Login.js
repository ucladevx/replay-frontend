import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const fetchFonts = async () => {
    return Font.loadAsync({
        GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
    });
}; 

export default function Login({ navigation }) {
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
                
                <Image source={require("../assets/leftcd.png")} style={styles.leftCD}/> 
                <Image source={require("../assets/rightcd.png")} style={styles.rightCD}/>

                <StatusBar style='auto' />
                <Text 
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    &lt;- Back 
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
                    
                        
                    <Text style={styles.label}>
                        <View style={{paddingRight: 20}}>
                            <Checkbox
                                value={isChecked}
                                onValueChange={setChecked}
                                style={styles.checkbox}
                            />
                        </View>
                        <Text>KEEP ME SIGNED IN</Text>
                    </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'GochiHand',
        
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
        marginTop: 10,
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
        fontWeight: "400" 
    },

    checkbox: {
        backgroundColor: "#F22424",
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 3,
    },

    label: {
        fontFamily: 'ShareTechMono',
        fontSize: 20,
        lineHeight: 23,
        marginBottom: 180,
    },

    leftCD: {
        flex: 1, 
        width: '35%', 
        height: '35%', 
        resizeMode: 'cover', 
        position: 'absolute', 
        opacity: 0.3,
        top: 470,
        left: 40,
        
    },

    rightCD: {
        flex: 1, 
        //width: '35%', 
        //height: '35%', 
        resizeMode: 'cover', 
        position: 'absolute', 
        opacity: 0.3,
        top: 500,
        left: 200

    },
    
});