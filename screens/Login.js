import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ref_input2 = useRef();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Text style={styles.header}>
                    Sign In
                </Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Username or Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                        secureTextEntry={false}
                        onSubmitEditing={() => ref_input2.current.focus()}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30
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

    forgot_button: {
        height: 30,
        marginBottom: 0,
    },

    sign_up_button: {
        height: 30,
        marginBottom: 30,
    },
     
    login_button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
  });