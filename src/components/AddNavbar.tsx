import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';

@inject(STORE_NAME)
@observer
export class AddNavbar extends Component<IStoreInjectedProps> {
    private handleCancel = () => {
        this.props[STORE_NAME].addStore.setNext(false);
        this.props[STORE_NAME].tabStore.setAddScreen(false);
        this.props[STORE_NAME].addStore.setContent('');
    };

    private handleNext = () => {
        if (this.props[STORE_NAME].addStore.getNext() === false) {
            if (this.props[STORE_NAME].addStore.getSelected()) {
                this.props[STORE_NAME].addStore.setNext(true);
            }
        } else {
            const response = this.props[STORE_NAME].postStore.addPostList(
                'admin',
                this.props[STORE_NAME].addStore.getContent(),
                false
            );
            console.log(response);
            this.props[STORE_NAME].addStore.setNext(false);
            this.props[STORE_NAME].tabStore.setAddScreen(false);
            this.props[STORE_NAME].addStore.setContent('');
        }
    };

    private handleShare = () => {
        return 0;
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
                <TouchableOpacity onPress={this.handleNext} activeOpacity={1}>
                    <Text style={styles.next}>
                        {this.props[STORE_NAME].addStore.getNext()
                            ? '공유'
                            : '다음'}
                    </Text>
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
