import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { PostImage } from './PostImage';

export class Post extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <View style={styles.top}>
                    <Image
                        style={styles.profile}
                        borderRadius={15}
                        source={require('../../assets/png/profile.png')}
                    />
                    <Text style={styles.name}>kyung_wook_</Text>
                </View>
                <PostImage />

                <View style={styles.bottom} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        width: 30,
        height: 30,
        margin: 12
    },
    name: {
        fontWeight: 'bold'
    },
    bottom: {}
});
