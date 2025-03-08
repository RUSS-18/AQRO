import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, StatusBar, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from 'react-native-paper';
import colors from '../configs/colors';

function HomeScreen({navigation}) {

    const cardsInfo = [
        {name: "Available", bgColor: "#3F6FF1", value: 5, icon: "briefcase"},
        {name: "Used", bgColor: "#70C146", value: 10, icon: "briefcase"},
        {name: "Returned", bgColor: "#6FACDA", value: 5, icon: "repeat"},
        {name: "Rebate Value", bgColor: "#E7C12D", value: 1455, icon: "card"},
        {name: "Claimed Rebate", bgColor: "#D3342B", value: 2400, icon: "card"},
        {name: "Total Containers", bgColor: "#DD8A20", value: 15, icon: "albums"}
    ];


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
                        <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/itos.jpg")} style={styles.imagePartner}/>
                        <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/jeds.jpg")} style={styles.imagePartner}/>
                        <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/piolos.jpg")} style={styles.imagePartner}/>
                        <Card style={[styles.imagePartner, {alignItems: 'center', justifyContent: 'center'}]}><Text style={{color:'#eee'}}>More...</Text></Card>
                    </View>

                    <Text style={[styles.subTitles, styles.subTitles2]}>Articles</Text>
                    <View style={styles.infoCage}>
                        <Card style={styles.articles}>    
                        </Card>
                        <Card style={styles.articles}>    
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: "#000",
    },

    container: {
        height:screenHeight, 
        alignItems:'center',
        backgroundColor: "#000",
        paddingTop: 20,
        // borderRadius: 10, 
        // borderTopWidth: 1,
        // borderTopColor: colors.accentBlack
    },

    scrollContainer: {
        paddingBottom: '60%'
    }, 

    infoCage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10
    },

    infoContainers: {
        height: 80,
        width: 110,
        backgroundColor: colors.accentBlack,
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
        backgroundColor: colors.accentBlack,
    },

    articles: {
        height: 120,
        width: 170,
        backgroundColor: colors.accentBlack,
    },

    subTitles: {
        color: '#eee',
        fontSize: 18, 
        fontWeight: 'bold',
        left: 25,
        bottom: 5
    },

    subTitles2: {
        marginTop: 30,
    },

    imagePartner: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: colors.accentBlack,
    },

    infoIcon: {
        color: '#eee',
    },

    infoCardIcon: {
        height: 28,
        width: 28,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    infoCardValue: {
        color: '#eee',
        fontSize: 18,
        fontWeight: 'bold',
    },

    infoCardName: {
        color: '#eee',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 15
    }

});


export default HomeScreen;