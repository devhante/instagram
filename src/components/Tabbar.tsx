import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabbarButton } from './TabbarButton';

export class Tabbar extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <TabbarButton name="home" />
                <TabbarButton name="search" />
                <TabbarButton name="add" />
                <TabbarButton name="favor" />
                <TabbarButton name="user" />
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
