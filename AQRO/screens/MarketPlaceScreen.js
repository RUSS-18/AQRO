import React from 'react';
import { SafeAreaView, Dimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { lightTheme } from '../configs/colors';

function MarketPlaceScreen(props) {
    return (
        <SafeAreaProvider style={styles.container1}>
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: lightTheme.cardBackground,
    },

    container: {
        height:screenHeight, 
        alignItems:'center',
        backgroundColor: lightTheme.background,
        paddingTop: 20,
        borderRadius: 10, 
        borderTopWidth: 1,
        borderTopColor: lightTheme.cardBackground
    },
});

export default MarketPlaceScreen;
