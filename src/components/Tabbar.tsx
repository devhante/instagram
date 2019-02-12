import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TabbarImage from './TabbarImage';

export default class Tabbar extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <View style={styles.button}>
                    <TabbarImage icon="home" fill={true} />
                </View>
                <View style={styles.button}>
                    <TabbarImage icon="search" fill={false} />
                </View>
                <View style={styles.button}>
                    <TabbarImage icon="add" fill={false} />
                </View>
                <View style={styles.button}>
                    <TabbarImage icon="favor" fill={false} />
                </View>
                <View style={styles.button}>
                    <TabbarImage icon="user" fill={false} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#FAFAFA',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)'
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height: '100%'
    }
});
