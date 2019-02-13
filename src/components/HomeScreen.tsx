import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeNavbar } from './HomeNavbar';

export class HomeScreen extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <HomeNavbar />
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {}
});
