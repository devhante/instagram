import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeNavbar } from './HomeNavbar';
import { Post } from './Post';

export class HomeScreen extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <HomeNavbar />
                <Post />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {}
});
