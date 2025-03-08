import React from 'react';
import { SafeAreaView, Dimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

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
});

export default MarketPlaceScreen;
