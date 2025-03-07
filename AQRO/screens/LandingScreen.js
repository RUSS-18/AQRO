import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity, TouchableWithoutFeedback, Platform, StatusBar, Dimensions, Button, ImageBackground} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';


import colors from '../configs/colors';

function LandingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("/Users/russelguerrero/AQRO2/AQRO/assets/6e32d65bb0a99dd564aa3f7f67c5b574.jpg")} style={styles.imageBg}/>
            <View style={styles.heroContainer}>
                <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/3.png")} style={styles.imageHero}/>
                <Text style={styles.heroText}>Scan. Save. Sustain</Text>
            </View>
            <View style={styles.signInButtonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
                  <Text style={[styles.buttonText, styles.secondaryText]}>Get started</Text>
                  <Ionicons name='arrow-forward-outline' size={28} style={styles.secondaryText} />
                </TouchableOpacity>
                <Text style={styles.secondaryText}>How It Works</Text>
            </View>
        </View>
        
    );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        backgroundColor:"#000",
        alignItems:'center',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0
      },

      signInButtonContainer: {
        height: "10%",
        position:'absolute',
        alignItems: 'center',
        bottom:50,
        gap: 6,
      },

      heroContainer: {
        position: 'absolute',
        height:'100%',
        width:'100%',
        alignItems:'center',
      },

      secondaryText: {
        color:'#eee',
        fontFamily: 'Helvetica',
      },
      
      heroText: {
        color:'#eee',
        fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
        top: -80,
      },

      button: {
        backgroundColor: '#27800c', 
        width: 320,
        height: '60%',
        flexDirection:'row',
        gap:8,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10, 
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderRightColor: '#eee',
        borderRightWidth: 1,
      },

      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
      },

      imageHero: {
        width:"80%",
        height: "50%",
        resizeMode:'contain',
      },

      imageBg: {
        height: '100%',
        width:'100%',
      }
})
export default LandingScreen;