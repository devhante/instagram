import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeNavbar } from './HomeNavbar';

export class SearchScreen extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <HomeNavbar />
                <Text>SearchScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {}
});
