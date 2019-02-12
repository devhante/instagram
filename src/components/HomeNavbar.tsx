import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeNavbar extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>instagram</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        height: 64,
        backgroundColor: '#FAFAFA',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    text: {
        fontSize: 24
    }
});
