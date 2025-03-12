import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, StatusBar, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import { Pressable} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import colors, { lightTheme } from '../configs/colors';

function HomeScreen({navigation}) {

    const cardsInfo = [
        {name: "Active", bgColor: "#70C146", value: 5, icon: "briefcase"},
        // {name: "Used", bgColor: "#3F6FF1", value: 10, icon: "briefcase"},
        {name: "Returned", bgColor: "#6FACDA", value: 8, icon: "repeat"},
        {name: "Available Rebate", bgColor: "#E7C12D", value: 1250, icon: "card"},
        // {name: "Claimed Rebate", bgColor: "#D3342B", value: 2400, icon: "card"},
        // {name: "Total Containers", bgColor: "#DD8A20", value: 15, icon: "albums"}
    ];

    const aqroPartners = [
        {name: "itos", image: require("../assets/itos.jpg")},
        {name: "jeds", image: require("../assets/jeds.jpg")},
        {name: "piolos", image: require("../assets/piolos.jpg")}
    ]


    return (
        <SafeAreaProvider style={styles.container1}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* <Text style={styles.subTitles}>Containers</Text> */}
                    <View style={styles.infoCage}>
                        {cardsInfo.map((card, index) => 
                            <Card key={index} style={styles.infoContainers}> 
                                <View style={styles.infoContent}>
                                    <View style={[styles.infoCardIcon, {backgroundColor: card.bgColor}]}>
                                        <Ionicons name={card.icon} size={18} style={styles.infoIcon}/>
                                    </View>
                                    <Text style={styles.infoCardValue}>{card.value}</Text>
                                </View>  
                                <Text style={styles.infoCardName}>{card.name}</Text>
                            </Card>
                        )}
                    </View>

                    <Text style={[styles.subTitles, styles.subTitles2]}>Community</Text>
                    <View style={styles.infoCage}>
                        <Card style={styles.comInfoContainers}>    
                        </Card>
                    </View>

                    <Text style={[styles.subTitles, styles.subTitles2]}>Our partners</Text>
                    <View style={styles.infoCage}>
                        {aqroPartners.map((partners, index) => 
                            <Image key={index} source={partners.image} style={styles.imagePartner}/>
                        )}
                        <Card style={[styles.imagePartner, {alignItems: 'center', justifyContent: 'center'}]}><Text style={{color:lightTheme.text}}>More...</Text></Card>
                    </View>

                    <Text style={[styles.subTitles, styles.subTitles2]}>AQRO Containers</Text>
                    <View style={styles.infoCage}>
                        <Card style={styles.recoProducts}>    
                        </Card>
                        <Card style={styles.recoProducts}>    
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: lightTheme.cardBackground,
    },

    container: {
        height:screenHeight, 
        alignItems:'center',
        backgroundColor: lightTheme.background,
        borderRadius: 10, 
        borderTopWidth: 1,
        borderTopColor: lightTheme.cardBackground
    },

    scrollContainer: {
        paddingBottom: '60%',
        marginTop: 20
    }, 

    infoCage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },

    infoContainers: {
        height: screenWidth * .2,
        width: screenWidth * .28,
        backgroundColor: lightTheme.secondary,
        padding: 8,
    },

    infoContent: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    comInfoContainers: {
        height: 200,
        width: 350,
        backgroundColor: lightTheme.secondary,
    },

    recoProducts: {
        height: 120,
        width: 170,
        backgroundColor: lightTheme.secondary,
    },

    subTitles: {
        color: lightTheme.text,
        fontSize: 18, 
        fontWeight: 'bold',
        left: 5,
        bottom: 5,
        marginTop: 20
    },

    subTitles2: {
        marginTop: 30,
    },

    imagePartner: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: lightTheme.secondary,
    },

    infoIcon: {
        color: lightTheme.secondary,
    },

    infoCardIcon: {
        height: 28,
        width: 28,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    infoCardValue: {
        color: lightTheme.text,
        fontSize: 18,
        fontWeight: 'bold',
    },

    infoCardName: {
        color: lightTheme.text,
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 15
    }

});


export default HomeScreen;