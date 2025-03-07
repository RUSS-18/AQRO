import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity, TouchableWithoutFeedback, Platform, StatusBar, Dimensions, Button, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function SignInScreen({navigation}) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const inputChange = (key, value) => {
        setFormData({...formData, [key] : value})
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={styles.backButton}>
                    <Ionicons name='chevron-back-outline' size={42} color='#eee'></Ionicons>
                </TouchableOpacity>
                <View style={styles.heroContainer}>
                    <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/3.png")} style={styles.imageHero}/>
                    <Text style={styles.heroText}>Be sustainable now!</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        keyboardType='email'
                        style={styles.inputContainer}
                        placeholder='Enter Email'
                        placeholderTextColor='#eee'
                        value={formData.email}
                        onChangeText={(text) => 
                            inputChange('email', text)
                        }
                    />

                    <TextInput
                        style={styles.inputContainer}
                        placeholder='Password'
                        placeholderTextColor='#eee'
                        secureTextEntry={true}
                        value={formData.password}
                        onChangeText={(text) => 
                        inputChange('password', text)
                        }
                    />
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>
                
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                        <Text style={[styles.buttonText, styles.secondaryText]}>Sign in</Text>
                        <Ionicons name='enter-outline' size={32} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.span}>
                        <Text style={styles.secondaryText}>No AQRO account yet?</Text>
                        <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.secondaryTextLink}>Create now</Text></Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    backButton: {
        height:42,
        width:42,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        top:'5%',
        left:'5%',
    },

    heroContainer: {
        width:'100%',
        height: '50%',
        alignItems:'center',
        top:40,
    },

    heroText: {
        color:'#eee',
        fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    imageHero: {
        height: 250,
        resizeMode:'contain',
        top:30,
    },

    container: {
        height: screenHeight,
        backgroundColor:"#000",
        alignItems:'center',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },

    formContainer: {
        width:'100%',
        color: '#eee',
        alignItems: 'center',
        top: -40,
        gap:12,
    },

    inputContainer: {
        width:'70%',
        height: 50,
        borderRadius:10,
        backgroundColor:'#555',
        paddingHorizontal: 10,
    },

    secondaryText: {
        color:'#eee',
        fontFamily: 'Helvetica',
    },

    secondaryTextLink: {
        color:'blue',
        fontFamily: 'Helvetica',
    },

    forgotPasswordText: {
        color:'#eee',
        fontFamily: 'Helvetica',
        left:'25%',
    },

    signInButtonContainer: {
        height: "10%",
        position:'absolute',
        alignItems:'center',
        bottom:50,
        gap: 6, 
    },

    button: {
        backgroundColor: '#27800c', 
        width: 320,
        height: 50,
        flexDirection:'row',
        gap:8,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10, 
      },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
      },

    icon: {
        color: '#eee',
        fontSize: 28,
    },

    span:{
        flexDirection:'row',
        gap: 8,
    }

})

export default SignInScreen;