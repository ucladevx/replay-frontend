import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, Keyboard, Image } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


const fetchFonts = async () => {
    return Font.loadAsync({
        MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        MontserratRegular: require("../assets/fonts/MontserratRegular.ttf"),
        MontserratMedium: require("../assets/fonts/MontserratMedium.ttf"),
    });
};

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};

/* TO DO: how are we to fetch user data from backend? Need to replace static data with data fetched */ 

export default function Profile() {

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
        //keyboardavoidingview
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Text style={styles.back}>
                    &lt;
                </Text>

                <View style={styles.pfpContainer}>
                    <Image source={require("../assets/accounticon.png")} style={styles.profileImage} />
                    <Text style={styles.username}>RetuneUser1401</Text>
                </View>

                <View style={styles.recents}>
                    <Text style={styles.recentTitle}>Recent Retunes</Text>
                    {/* Repeat these 5x; could we make each into a component?  */}
                    <View style={{ marginTop: 10, flexDirection: 'row' }} >
                        <Image source={require("../assets/OliviaRodrigoAlbum.png")} style={styles.replay1img} />

                        <View style={{ marginTop: 10, }}>
                            <Text style={styles.replayText}>Sour</Text>
                            <Text style={styles.replayText}>Olivia Rodrigo</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 150, margin: 10, }}>
                            <Image source={require("../assets/play.png")} style={styles.playIcon} />
                            <Image source={require("../assets/plus.png")} style={styles.addIcon} />
                            <Image source={require("../assets/spotifyicon.png")} style={styles.spotifyIcon} />
                        </View>
                    </View>

                    <View style={{ marginTop: 5, flexDirection: 'row' }} >
                        <Image source={require("../assets/johnlegend.png")} style={styles.replay1img} />

                        <View style={{ marginTop: 10, }}>
                            <Text style={styles.replayText}>All of Me</Text>
                            <Text style={styles.replayText}>John Legend</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 156, margin: 10, }}>
                            <Image source={require("../assets/play.png")} style={styles.playIcon} />
                            <Image source={require("../assets/plus.png")} style={styles.addIcon} />
                            <Image source={require("../assets/spotifyicon.png")} style={styles.spotifyIcon} />
                        </View>
                    </View>

                    <View style={{ marginTop: 5, flexDirection: 'row' }} >
                        <Image source={require("../assets/conangray.png")} style={styles.replay1img} />

                        <View style={{ marginTop: 10, }}>
                            <Text style={styles.replayText}>Heather</Text>
                            <Text style={styles.replayText}>Conan Gray</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 165, margin: 10, }}>
                            <Image source={require("../assets/play.png")} style={styles.playIcon} />
                            <Image source={require("../assets/plus.png")} style={styles.addIcon} />
                            <Image source={require("../assets/spotifyicon.png")} style={styles.spotifyIcon} />
                        </View>
                    </View>

                    <View style={{ marginTop: 5, flexDirection: 'row' }} >
                        <Image source={require("../assets/lauv.png")} style={styles.replay1img} />

                        <View style={{ marginTop: 10, }}>
                            <Text style={styles.replayText}>I like me Better</Text>
                            <Text style={styles.replayText}>Lauv</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 145, margin: 10, }}>
                            <Image source={require("../assets/play.png")} style={styles.playIcon} />
                            <Image source={require("../assets/plus.png")} style={styles.addIcon} />
                            <Image source={require("../assets/spotifyicon.png")} style={styles.spotifyIcon} />
                        </View>
                    </View>


                    <View style={{ marginTop: 5, flexDirection: 'row' }} >
                        <Image source={require("../assets/brunomajor.png")} style={styles.replay1img} />

                        <View style={{ marginTop: 10, }}>
                            <Text style={styles.replayText}>Nothing</Text>
                            <Text style={styles.replayText}>Bruno Major</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 160, margin: 10, }}>
                            <Image source={require("../assets/play.png")} style={styles.playIcon} />
                            <Image source={require("../assets/plus.png")} style={styles.addIcon} />
                            <Image source={require("../assets/spotifyicon.png")} style={styles.spotifyIcon} />
                        </View>
                    </View>
                </View>

                <Text style={styles.topArtistHeader}>RetuneUser1401's Top Artists</Text>
                <View style={styles.top_artists}>
                    <View style={styles.artist_bubble} backgroundColor='#AAD9EE' borderColor='#AAD9EE'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Olivia Rodrigo
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#256D7B' borderColor='#256D7B'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Harry Styles
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#E9D8A6' borderColor='#E9D8A6'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Lewis Capaldi
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#F6A5A5' borderColor='#F6A5A5'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Mitski
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#C1876B' borderColor='#C1876B'>
                        <Image source={require("../assets/conangray.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Haim
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#83C64E' borderColor='#83C64E'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            BTS
                        </Text>
                    </View>
                    <View style={styles.artist_bubble} backgroundColor='#4A192C' borderColor='#4A192C'>
                        <Image source={require("../assets/Lewis.png")} style={styles.artist_pic} />
                        <Text style={styles.artistName}>
                            Pentatonix
                        </Text>
                    </View>
                </View>

                <Text style={styles.playlist_header}>RetuneUser's Playlists</Text>
                <View style={styles.playlistgroup}>
                    <View style={styles.playlist}>
                        <View style={styles.playlist_cover}>
                            <Image source={require("../assets/conangray.png")} style={styles.playartist} />
                            <Image source={require("../assets/lauv.png")} style={styles.playartist} />
                            <Image source={require("../assets/OliviaRodrigoAlbum.png")} style={styles.playartist} />
                            <Image source={require("../assets/johnlegend.png")} style={styles.playartist} />

                        </View>
                        <Text style={styles.playlistTitle}>Retune Added Songs</Text>
                    </View>


                    <View style={styles.playlist}>
                        <View style={styles.playlist_cover}>
                            <Image source={require("../assets/OliviaRodrigoAlbum.png")} style={styles.playartist} />
                            <Image source={require("../assets/johnlegend.png")} style={styles.playartist} />
                            <Image source={require("../assets/conangray.png")} style={styles.playartist} />
                            <Image source={require("../assets/lauv.png")} style={styles.playartist} />

                        </View>
                        <Text style={styles.playlistTitle}>Retune Added Songs</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );


}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1B',
        flex: 1,
        alignItems: 'center', 
        flexDirection: 'column',
    },
    back: {
        alignItems: 'stretch',
        justifyContent: 'center',
        fontFamily: 'MontserratMedium',
        position: 'absolute',
        width: 95,
        height: 20,
        left: 20,
        top: 50,
        fontSize: 24,
        color: 'white'
    },
    pfpContainer: {
        top: 50,
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    username: {
        fontFamily: 'MontserratSemiBold',  //semibold
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 10,

    },
    recents: {
        top: 50,
        margin: 10,
        right: 70,
    },
    recentTitle: {
        fontFamily: 'MontserratSemiBold',  //make this medium 
        color: '#FFFFFF',
        fontSize: 18,

    },
    replayText: {
        fontFamily: 'MontserratSemiBold',  //make this medium 
        color: '#FFFFFF',
        fontSize: 10,
        margin: 1,
    },
    replay1img: {
        width: 45,
        height: 45,
        marginRight: 10,
    },
    playIcon: {
        marginRight: 10,
    },
    addIcon: {
        marginRight: 10,
    },
    top_artists: {
        marginTop: 50,
        width: '90%',
        backgroundColor: '#363434',
        borderColor: '#363434',
        borderWidth: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    topArtistHeader: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 10,
        fontFamily: 'MontserratSemiBold',
        color: 'white',
        right: 50,
        top: 50,
    },
    artistName: {
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        fontSize: 14
    },
    artist_bubble: {
        borderWidth: 8,
        borderRadius: 10,
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
        width: 130,
        height: 130,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        borderWidth: 5,
        borderColor: '#EE9B00'
    },
    playartist: {
        width: 60,
        height: 60,
    },
    playlistTitle: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 12,
        color: 'white',
        borderTopWidth: 5,

    },
    playlistgroup: {
        alignContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    playlist: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 40,
    },
    playlist_header: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
        fontFamily: 'MontserratSemiBold',
        color: 'white',
        right: 70
    },
});





