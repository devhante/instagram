import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeNavbar from '../components/HomeNavbar';
import Tabbar from '../components/Tabbar';

export default class HomeScreen extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <HomeNavbar />
                <View style={styles.tabbar}>
                    <Tabbar />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: '100%'
    },
    tabbar: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});
