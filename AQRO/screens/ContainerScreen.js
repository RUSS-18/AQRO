import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, StatusBar, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import { Pressable} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, SegmentedButtons } from 'react-native-paper';
import colors, { lightTheme } from '../configs/colors';

function ContainerScreen(props) {

    const cardsInfo = [
        {name: "Active", bgColor: "#70C146", value: 5, icon: "briefcase"},
        {name: "Used", bgColor: "#3F6FF1", value: 10, icon: "briefcase"},
        {name: "Returned", bgColor: "#6FACDA", value: 8, icon: "repeat"},
        {name: "Available Rebate", bgColor: "#E7C12D", value: 1250, icon: "card"},
        {name: "Claimed Rebate", bgColor: "#D3342B", value: 2400, icon: "card"},
        {name: "Total Containers", bgColor: "#DD8A20", value: 15, icon: "albums"}
    ];

    const containerInfo = [
        {containerID: 1, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito", remain: 4, capacity: 10, state: "Active"},
        {containerID: 2, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito1", remain: 6, capacity: 10, state: "Active"},
        {containerID: 3, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito2", remain: 9, capacity: 10, state: "Active"},
        {containerID: 4, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito3", remain: 2, capacity: 10, state: "Active"},
        {containerID: 5, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito4", remain: 1, capacity: 10, state: "Active"},
        {containerID: 1, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito", remain: 4, capacity: 10, state: "Used"},
        {containerID: 2, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito1", remain: 0, capacity: 10, state: "Used"},
        {containerID: 3, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito2", remain: 0, capacity: 10, state: "Used"},
        {containerID: 4, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito3", remain: 0, capacity: 10, state: "Used"},
        {containerID: 5, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito4", remain: 0, capacity: 10, state: "Used"},
        {containerID: 1, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito", remain: 0, capacity: 10, state: "Used"},
        {containerID: 3, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito2", remain: 0, capacity: 10, state: "Returned"},
        {containerID: 2, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito1", remain: 0, capacity: 10, state: "Returned"},
        {containerID: 4, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito3", remain: 2, capacity: 10, state: "Void"},
        {containerID: 5, image: "/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png" ,name: "lito4", remain: 1, capacity: 10, state: "Void"},
    ]


    const [value, setVal] = useState('Active');

    return (
        <SafeAreaProvider style={styles.container1}>
            <SafeAreaView style={styles.container}>
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
                <SegmentedButtons 
                    value={value}
                    onValueChange={setVal}
                    buttons={[
                        { 
                            value: "Active", 
                            label: "Active", 
                            style: value === "Active" ? styles.selectedButton : {} 
                        },
                        { 
                            value: "Inactive", 
                            label: "Inactive", 
                            style: value === "Inactive" ? styles.selectedButton : {} ,

                        },
                    ]}
                    style={styles.filter}
                />

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {value === 'Active' && ( 
                        containerInfo.filter(container => container.state === 'Active').map((container, index) =>   
                        <Pressable>
                            <Card key={index} style={styles.infoCageContainers}>
                                <View style={styles.infoContent}>
                                    <View style={styles.imageContainer}>
                                        <Image source={require('/Users/russelguerrero/AQRO2/AQRO/assets/Bilao-14-Inch.png')} style={styles.listImage}/>
                                    </View>     
                                    <View style={styles.containerBasicInfo}>
                                        <Text style={[styles.basicInfoContent, styles.infoCardValue]}>{container.name}</Text>
                                        <Text style={[styles.basicInfoContent, {color: lightTheme.primary}]}>{container.state}</Text>
                                        <Text style={styles.basicInfoContent}>Remaining use: {container.remain}</Text>
                                        <Text style={styles.basicInfoContent}>Limit: {container.capacity}</Text>
                                    </View>                               
                                </View>
                            </Card>       
                        </Pressable>
                    ))}

                    {value === 'Inactive' && ( 
                            containerInfo.filter(container => container.state !== 'Active').map((container, index) =>   
                            <Card key={index} style={styles.infoCageContainers}>
                                <Text>{container.state}</Text>
                            </Card>             
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: lightTheme.cardBackground
    },

    container: {
        alignItems:'center',
        backgroundColor: lightTheme.background,
        borderRadius: 10, 
        borderTopWidth: 1,
        borderTopColor: lightTheme.cardBackground
    },

    filter: {
        width: 240,
        height: 40,
        marginBottom: 20
    },

    selectedButton: {
        backgroundColor: lightTheme.primary,
    },

    scrollContainer: {
        paddingBottom: screenHeight * .4,
        gap: 8,
    }, 
    
    infoCage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
        marginBottom: 40,

    },

    infoCageContainers: {
        height: screenWidth * .2,
        width: screenWidth * .86,
        backgroundColor: lightTheme.secondary,
    },
    
    containerContent: {
        backgroundColor: 'red',
        width: 100,
        height: 200
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
    },

    containerContent: {
        height: screenWidth * .2,
        width: screenWidth * .8
    },

    listImage: {
        width: "100%",
        height: "100%",  
    },

    imageContainer: {
        // backgroundColor: 'red',
        width: "25%",
        height: "100%",  
        borderLeftColor: lightTheme.primary,
        borderLeftWidth: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    containerBasicInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "100%"
    },

    basicInfoContent: {
        width: "50%",
    },
});

export default ContainerScreen;
