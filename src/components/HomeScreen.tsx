import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeNavbar } from './HomeNavbar';
import { PostView } from './PostView';

export class HomeScreen extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <HomeNavbar />
                <PostView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {}
});
