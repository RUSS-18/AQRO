import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, StatusBar, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';

function SignUpScreen({ navigation }) {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        Cpassword: ''
    });

    const inputChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={styles.backButton}>
                    <Ionicons name='chevron-back-outline' size={42} color='#eee' />
                </TouchableOpacity>
                <View style={styles.heroContainer}>
                    <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/3.png")} style={styles.imageHero} />
                    <Text style={styles.heroText}>Create account</Text>
                </View>
                    <View style={styles.scrollContainer}>
                        <ScrollView keyboardShouldPersistTaps="handled">
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                <View style={styles.formContainer}>
                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder='First name'
                                        placeholderTextColor='#eee'
                                        value={formData.fname}
                                        onChangeText={(text) => inputChange('fname', text)}
                                    />

                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder='Last name'
                                        placeholderTextColor='#eee'
                                        value={formData.lname}
                                        onChangeText={(text) => inputChange('lname', text)}
                                    />
                                
                                    <Text></Text>
                                    <TextInput
                                        keyboardType='email-address'
                                        style={styles.inputContainer}
                                        placeholder='Email'
                                        placeholderTextColor='#eee'
                                        value={formData.email}
                                        onChangeText={(text) => inputChange('email', text)}
                                    />

                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder='Password'
                                        placeholderTextColor='#eee'
                                        secureTextEntry
                                        value={formData.password}
                                        onChangeText={(text) => inputChange('password', text)}
                                    />

                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder='Confirm password'
                                        placeholderTextColor='#eee'
                                        secureTextEntry
                                        value={formData.Cpassword}
                                        onChangeText={(text) => inputChange('Cpassword', text)}
                                    />
                                    <View style={styles.span}>
                                        <Checkbox status={checked? 'checked' : 'notchecked' } onPress={() => setChecked(!checked)} />
                                        <Text style={styles.secondaryText}>Agree to terms and conditions</Text>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                    <View style={styles.signInButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                            <Text style={[styles.buttonText]}>Sign up</Text>
                            <Ionicons name='arrow-up-circle-outline' style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.span}>
                            <Text style={styles.watermarkText}>AQRO@2024</Text>
                        </View>
                    </View>     
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    scrollContainer: {
        height: '40%',
        width:'100%',
        top: -50,
    },

    backButton: {
        height: 42,
        width: 42,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%',
        left: '5%',
    },

    heroContainer: {
        width:'100%',
        height: '50%',
        position:'relative',
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
    formContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom:100,
        gap: 12,
    },

    inputContainer: {
        width: '70%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#555',
        paddingHorizontal: 10,
    },

    secondaryText: {
        color: '#eee',
        fontSize: 14,
    },

    icon: {
        color: '#eee',
        fontSize: 28,
    },

    watermarkText: {
        color: '#555',
        fontSize: 12,
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
        color:'#eee'
      },

    span:{
        flexDirection:'row',
        alignItems:'center',
        gap: 8,
    }
});

export default SignUpScreen;
