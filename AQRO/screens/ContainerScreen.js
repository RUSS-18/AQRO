import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function ContainerScreen(props) {
    return (
        <SafeAreaProvider></SafeAreaProvider>
    );
}

export default ContainerScreen;