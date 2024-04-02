//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Wrapper = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal : 16,
        paddingVertical : 16,
    },
});

//make this component available to the app
export default Wrapper;
