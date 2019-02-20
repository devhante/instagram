import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';

interface IProps extends IStoreInjectedProps {}

@inject(STORE_NAME)
export class AddNavbar extends Component<IProps> {
    private handleCancel = () => {
        this.props[STORE_NAME].tabStore.setAddScreen(false);
    };

    public render() {
        return (
            <View style={styles.root}>
                <TouchableOpacity
                    onPress={this.handleCancel}
                    activeOpacity={1}
                    style={styles.cancelButton}
                >
                    <Text style={styles.cancel}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleCancel} activeOpacity={1}>
                    <Text style={styles.next}>다음</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        height: 44,
        borderBottomWidth: 0.5
    },
    cancelButton: {
        flex: 1
    },
    cancel: {
        marginLeft: 16,
        fontSize: 16
    },
    next: {
        marginRight: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF'
    }
});
