import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';

@inject(STORE_NAME)
export class AddButton extends Component<IStoreInjectedProps> {
    private handlePress = () => {
        this.props[STORE_NAME].tabStore.setAddScreen(true);
    };

    public render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.handlePress}
                activeOpacity={1}
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/icons/tabbar/add-outline.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height: '100%'
    },
    icon: {
        width: 36,
        height: 36
    }
});
