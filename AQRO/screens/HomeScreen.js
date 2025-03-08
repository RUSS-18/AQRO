import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, StatusBar, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from 'react-native-paper';

function HomeScreen({navigation}) {

    return (
        <SafeAreaProvider style={styles.container1}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* <Text style={styles.subTitles}>Containers</Text> */}
                    <View style={styles.infoCage}>
                        <Card style={styles.infoContainers}>    
                        </Card>
                        <Card style={styles.infoContainers}>    
                        </Card>
                        <Card style={styles.infoContainers}>    
                        </Card>
                        <Card style={styles.infoContainers}>    
                        </Card>
                        <Card style={styles.infoContainers}>    
                        </Card>
                        <Card style={styles.infoContainers}>    
                        </Card>
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
        // borderTopColor: "#555"
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
        backgroundColor: '#eee',
        opacity: .5
    },

    comInfoContainers: {
        height: 200,
        width: 350,
        backgroundColor: '#eee',
        opacity: .5
    },

    articles: {
        height: 120,
        width: 170,
        backgroundColor: '#eee',
        opacity: .5
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
        backgroundColor: '#eee',
        opacity: .5,
    }

});


export default HomeScreen;