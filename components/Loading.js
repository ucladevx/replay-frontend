import React from "react";

export default function Loading() {
  let [fontsLoaded] = useFonts({
   'GochiHand': require("../assets/fonts/GochiHand-Regular.ttf"),
    'ShareTechMono': require("../assets/fonts/ShareTechMono-Regular.ttf"),
  });
  
  return (
    <View style={styles.container}> 
      <Image 
        source = {require("../assets/loading1.png")}
        style = {styles.first} />
      <Image 
        source = {require("../assets/loading2.png")}
        style = {styles.second} />
      <Image 
        source = {require("../assets/loading3.png")}
        style = {styles.third} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    //flex: 1,
   backgroundColor: "E9D8A6",
    alignItems: "center",
    justifyContent: "center",
  },
  first:{
    width: 308,
    height: 308,
    marginLeft: 63,
    marginTop: 294,
    fontSize: 36,
   // fontFamily: 'GochiHand',
   fontWeight: 'bold',
   color: "#EE9B00",
  //color: 'white'
  },
   setText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#EE9B00",
   },

   secondaryText:{
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E9D8A6',
   },

   paragraphText:{
    fontSize:18,
    fontWeight: 'bold',
    color:'#E9D8A6',
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

  finalText:{
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E9D8A6',
  },
 
  forgot_button: {
    height: 30,
  },
 
  loginBtn: {
    width: "81.7%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgb(255,255,255)',
    height: 50,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#A5A6F6",
    marginBottom: 400,
  },
  loginText: {
    fontWeight: "900",
  },
});