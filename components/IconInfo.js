import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const fetchFonts = async () => {
    return Font.loadAsync({
        MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        MontserratRegular: require("../assets/fonts/MontserratRegular.ttf"),
        MontserratMedium: require("../assets/fonts/MontserratMedium.ttf"),
        Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
    });
};

const sourLink = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f89c375a-b5bf-4456-a34d-0e7681165dfb/dekbvmx-d268e2cc-f2c2-4da6-ba69-e09b3283e5e6.jpg';
const allOfMeLink = 'https://i.scdn.co/image/ab67616d0000b27394c9217a398f5174757c0c78';
const heatherLink = 'https://cdns-images.dzcdn.net/images/cover/5ce766122169a6dfab32ffdcea52fb7a/500x500.jpg';
const lauvLink = 'https://i.scdn.co/image/ab67616d0000b273fab48816b625e2a77a732400';
const brunoLink = 'https://i.scdn.co/image/ab67616d0000b27395998c6ca2c759356eee3c3b';
const justinLink = 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431';

const styles = StyleSheet.create({
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
        color: 'black'
    },
    calendarIcon: {
        marginLeft: 10,
        width: 13,
        height: 11,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center', 
        flexDirection: 'column',
    },
    header1: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Pacifico',         
        color: '#0A9396',       //blue
        position: 'absolute',
        top: -20,
        left: 13, 
    },
    header2: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#94D2BD',
        margin: 0, 
        position: 'absolute',
        top: -19,
        left: 12,         
    },
    header3: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#E9D8A6',
        margin: 0, 
        position: 'absolute',
        top: -18,
        left: 11,  
    },
    //farthest top header
    header4: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Pacifico', 
        color: '#EE9B00',       //orange
        margin: 0, 
        position: 'absolute',
        top: -17,
        left: 10, 
    },
    largeIcon: {
        marginRight: 10,
        width: 35,
        height: 35,
    },
    topAlbumView: {
        marginTop: 90,
        flex: 1,
        flexDirection: 'row',
    },
    topAlbumInfo: {
        flex: 1,
        flexDirection: 'column',
    },
    recentHeader: {
        flexDirection: 'row'
    },
    recents: {
        bottom: 200,
        margin: 10,
        right: 60,
    },
    recentSubtitle: {
        fontFamily: 'MontserratSemiBold',  //make this medium 
        color: '#000000',
        fontSize: 13,
        lineHeight: 20,
        marginLeft: 10,
        marginBottom: 10,
    },
    recentTitle: {
        fontFamily: 'MontserratSemiBold',  //make this medium 
        color: '#000000',
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,

    },
    replayText: {
        fontFamily: 'MontserratRegular',  //make this medium 
        color: '#000000',
        fontSize: 10,
        margin: 1,
    },
    replay1img: {
        width: 45,
        height: 45,
        marginRight: 10,
    },
    smallPlayIcon: {
        marginRight: 15,
        width: 13,
        height: 17,
    },
    smallPlusIcon: {
        marginRight: 15,
        width: 16.25,
        height: 16.25,
    },
    smallSpotifyIcon: {
        marginRight: 15,
        width: 22,
        height: 20.29,
    },
    topAlbumImage: {
        width: 155,
        height: 155,
        marginLeft: 21,
    },
});

function SongEntry(props) {
    var image = props.image;
    return(
        <View style={{ marginTop: 10, flexDirection: 'row' }} >
            <Image source={{uri: image}} style={styles.replay1img} />

            <View style={{ marginTop: 10, }}>
                <Text style={styles.replayText}>{props.album}</Text>
                <Text style={styles.replayText}>{props.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', left: props.left, margin: 10, justifyContent: 'space-between'}}>
                <Image source={require("../assets/plus_black.png")} style={styles.smallPlusIcon} />
                <Image source={require("../assets/play_black.png")} style={styles.smallPlayIcon} />
                <Image source={require("../assets/spotifyicon_black.png")} style={styles.smallSpotifyIcon} />
            </View>
        </View>
    );
}

function ReplayLogo() {
    return(
        <View>
            <Text style={styles.header1}>Retunes</Text>
            <Text style={styles.header2}>Retunes</Text>
            <Text style={styles.header3}>Retunes</Text>
            <Text style={styles.header4}>Retunes</Text>
        </View>
    );
}

function TopAlbum() {
    return (
        <View style={styles.topAlbumView}>
            <Image source={{ 
                uri: sourLink}} 
                style={styles.topAlbumImage} />
            <View style={styles.topAlbumInfo}>
                <Text style={styles.recentTitle}>good 4 u</Text>
                <Text style={styles.recentSubtitle}>Sour Album{"\n"}By Olivia Rodrigo</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require("../assets/calendar.png")} style={styles.calendarIcon} />                
                    <Text style={{fontSize: 10, marginLeft: 5}}>May 14, 2021</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20, width: 161.05, justifyContent: 'space-between'}}>
                    <Image source={require("../assets/plus_black.png")} style={styles.largeIcon} />
                    <Image source={require("../assets/play_gradient.png")} style={styles.largeIcon} />
                    <Image source={require("../assets/spotifyicon_black.png")} style={styles.largeIcon} />
                </View>
            </View>
        </View>
    );
}

function RecentRetunes() {
    return (
        <View style={styles.recents}>
            <View style={styles.recentHeader}>
                <Text style={styles.recentTitle}>RetuneUser1401's Recent</Text>
                <ReplayLogo/>
            </View>
            <SongEntry album="Sour" name="Olivia Rodrigo" left={150} image={sourLink}/>
            <SongEntry album="All of Me" name="John Legend" left={156} image={allOfMeLink}/>
            <SongEntry album="Heather" name="Conan Gray" left={165} image={heatherLink}/>
            <SongEntry album="I Like Me Better" name="Lauv" left={145} image={lauvLink}/>
            <SongEntry album="Nothing" name="Bruno Major" left={160} image={brunoLink}/>
            <SongEntry album="Ghost" name="Justin Bieber" left={160} image={justinLink}/>
        </View>
    );
}

export default function IconInfo() {
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
        <View style={styles.container}>
            <TopAlbum/>
            <RecentRetunes/>
        </View>
    );
}

