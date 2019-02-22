import { action, observable, toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TextInput } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';
import { AddNavbar } from './AddNavbar';

@inject(STORE_NAME)
@observer
export class AddScreen extends Component<IStoreInjectedProps> {
    @action
    private getSelectedImages = (images: object[]) => {
        this.props[STORE_NAME].addStore.setImages(images);
        if (images.length === 0) {
            this.props[STORE_NAME].addStore.setSelected(false);
        } else {
            this.props[STORE_NAME].addStore.setSelected(true);
        }
    };

    @action
    private handleCancel = () => {
        this.props[STORE_NAME].addStore.setNext(false);
        this.props[STORE_NAME].tabStore.setAddScreen(false);
    };

    @action
    private handleNext = () => {
        this.props[STORE_NAME].addStore.setNext(true);
    };

    private handleShare = () => {
        return 0;
    };

    @action
    private handleChangeText = (value: string) => {
        this.props[STORE_NAME].addStore.setContent(value);
    };

    public render() {
        return (
            <Modal
                animationType="slide"
                visible={this.props[STORE_NAME].tabStore.getAddScreen()}
            >
                <AddNavbar />
                {this.props[STORE_NAME].addStore.getNext() ? (
                    <TextInput
                        style={styles.content}
                        onChangeText={this.handleChangeText}
                        value={this.props[STORE_NAME].addStore.getContent()}
                        multiline={true}
                        placeholderTextColor="gray"
                        placeholder="설명 입력..."
                    />
                ) : (
                    <CameraRollPicker
                        groupTypes="All"
                        maximum={10}
                        assetType="All"
                        callback={this.getSelectedImages}
                        imagesPerRow={4}
                        imageMargin={2}
                    />
                )}
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        height: '100%',
        margin: 16
    }
});
