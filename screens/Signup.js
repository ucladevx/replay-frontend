import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { checkIfUnderage } from '../helpers/date';
import { 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView,
    Keyboard, 
    Image, 
} from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import PlatformConnect from './PlatformConnect';

const fetchFonts = async () => {

    return Font.loadAsync({
        GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
      });
}; 
 
export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
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
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.content}>
                    <StatusBar style='auto' />
                    <Image source={require("../assets/walkman.png")} style={styles.image}/>
                    <Text 
                        style={styles.back}
                        onPress={() => navigation.goBack()}
                    >
                        &lt;- Back 
                    </Text>
                    <View style={styles.mainscreen} >
                        <Text style={styles.header}>Sign Up</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Email"
                                placeholderTextColor="#000000"
                                onChangeText={(email) => setEmail(email)}
                                secureTextEntry={false}
                                onSubmitEditing={() => ref_input2.current.focus()}      
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Username"
                                placeholderTextColor="#000000"
                                onChangeText={(username) => setUsername(username)}
                                secureTextEntry={false}
                                onSubmitEditing={() => ref_input2.current.focus()}      
                            />
                        </View>
                        <View style = {{marginBottom: 10}}>
                            <Text style={styles.warning}>*may be shown publicly</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Create Password"
                                placeholderTextColor="#000000"
                                secureTextEntry
                                onChangeText={(password) => setPassword(password)}
                                ref={ref_input2}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Confirm Password"
                                placeholderTextColor="#000000"
                                secureTextEntry
                                onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
                                
                            />
                        </View>
                        {/*TODO: Change input to pull up a calender*/}
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="YYYY-MM-DD"
                                placeholderTextColor="#000000"
                                onChangeText={(dob) => setDob(dob)}
                                
                            />
                        </View>

                        <TouchableOpacity 
                            style={styles.sign_up_button}
                            onPress={() => {
                                if (checkIfUnderage(dob)) {alert('Oops! You must be at least 13 years of age to use Replay.');}
                                else { navigation.navigate(PlatformConnect)}}
                            }
                        >
                            <Text 
                                style={styles.sign_up_text}
                            >Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE9B00',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        flex: 1, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainscreen: {
        alignItems: 'center',
        marginTop: 55,
    },

    image: {
        position: 'absolute',
        resizeMode: 'cover',
        height: 580,
        width: 410,
        top: 20,
        right: 0,
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

    warning: {
        fontFamily: 'ShareTechMono', 
        color: '#9B2226',
        position: 'absolute',
        right: -20,
        bottom: -5,
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
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
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,
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

    sign_up_button: {
        width: 179,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A5A6F6",
        borderWidth: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 4,

    },

    sign_up_text: {
        fontFamily: 'ShareTechMono', 
        fontSize: 24,
        fontWeight: "bold", //figure out how to make bold
    },
});