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
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer} >
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
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container: {
        height:screenHeight, 
        alignItems:'center',
        backgroundColor: "#000",
        paddingTop: 10,
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
    }

});


export default HomeScreen;