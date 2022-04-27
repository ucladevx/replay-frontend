import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Icon } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = async () => {
    return Font.loadAsync({
        GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
        ShareTechMono: require("../assets/fonts/ShareTechMono-Regular.ttf"),
        Montserrat: require("../assets/fonts/Montserrat-Medium.ttf")
    });
};
const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};
export default function Profile() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const ref_input2 = useRef();
    // const [isChecked, setChecked] = useState(false);

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
                    &lt;
                </Text>

                <Text style={styles.header}>ReplayUser's Top Artists</Text>

                <View style={styles.top_artists}>
                    <View style={styles.artist_bubble} backgroundColor='#AAD9EE' borderColor='#AAD9EE'>
                        <Image source={require("../assets/artistpics/Olivia_Rodrigo_SOUR.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Olivia Rodrigo
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#256D7B' borderColor='#256D7B'>
                        <Image source={require("../assets/artistpics/Harry.jpeg")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Harry Styles
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#E9D8A6' borderColor='#E9D8A6'>
                        <Image source={require("../assets/artistpics/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Lewis Capaldi
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#F6A5A5' borderColor='#F6A5A5'>
                        <Image source={require("../assets/artistpics/Mitski.jpeg")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Mitski
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#C1876B' borderColor='#C1876B'>
                        <Image source={require("../assets/artistpics/Haim.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Haim
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#83C64E' borderColor='#83C64E'>
                        <Image source={require("../assets/artistpics/BTS.jpeg")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            BTS
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#4A192C' borderColor='#4A192C'>
                        <Image source={require("../assets/artistpics/Pentatonix.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Pentatonix
                        </Text>
                    </View>

                </View>


                <Text style={styles.header}>ReplayUser's Playlists</Text>
                <View style={styles.playlistgroup}>
                    <View style={styles.playlist}>
                        <View style={styles.playlist_cover}>
                            <Image source={require("../assets/artistpics/Harry.jpeg")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/Haim.png")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/Olivia_Rodrigo_SOUR.png")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/BTS.jpeg")} style={styles.playartist} />

                        </View>
                        <Text style={styles.playlistTitle}>Replay Added Songs</Text>
                    </View>


                    <View style={styles.playlist}>
                        <View style={styles.playlist_cover}>
                            <Image source={require("../assets/artistpics/Harry.jpeg")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/Haim.png")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/Olivia_Rodrigo_SOUR.png")} style={styles.playartist} />
                            <Image source={require("../assets/artistpics/BTS.jpeg")} style={styles.playartist} />

                        </View>
                        <Text style={styles.playlistTitle}>Replay Added Songs</Text>
                    </View>
                </View>

            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        alignItems: 'center',
        justifyContent: 'center',

    },
    back: { //for the back button
        alignItems: 'stretch',
        justifyContent: 'center',
        fontFamily: 'Montserrat',
        position: 'absolute',
        width: 95,
        height: 20,
        left: 20,
        top: 50,
        fontSize: 24,
        color: 'white'
    },
    header: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 10,
        fontFamily: 'Montserrat',
        color: 'white',
        right: 70
    },
    top_artists: {
        // height: '20%',
        width: '90%',
        backgroundColor: '#363434',
        borderColor: '#363434',
        borderWidth: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    artistName: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 14
    },
    artist_bubble: {
        borderWidth: 8,
        borderRadius: 10,
        // width: '50%',
        alignSelf: 'flex-start',
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    artist_pic: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 5
    },
    playlist_cover: {
        width: 160,
        height: 160,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        borderWidth: 5,
        borderColor: '#EE9B00'
    },
    playartist: {
        width: 75,
        height: 75,
    },
    playlistTitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: 'white',
        borderTopWidth: 5

    },
    playlistgroup: {
        alignContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    playlist: {
        marginBottom: 10,
        marginRight: 15
    }

});

//todo - add the username into the code
//user's top 6 artists are displayed, if they found less than 6 artists than 1,2,3,4,or 5 artists are shown
//       depending on the user
//make the header  to the left, and playlists to the left