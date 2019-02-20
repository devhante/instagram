import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Modal, StyleSheet, Text } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';
import { AddNavbar } from './AddNavbar';

@inject(STORE_NAME)
@observer
export class AddScreen extends Component<IStoreInjectedProps> {
    @observable private images: object[];

    @action
    private getSelectedImages = images => {
        this.images = images;
    };

    private handleNext = () => {
        return 0;
    };

    private handleShare = () => {
        return 0;
    };

    public render() {
        return (
            <Modal
                animationType="slide"
                visible={this.props[STORE_NAME].tabStore.getAddScreen()}
            >
                <AddNavbar />
                <CameraRollPicker
                    groupTypes="All"
                    maximum={10}
                    assetType="All"
                    callback={this.getSelectedImages}
                    imagesPerRow={4}
                    imageMargin={2}
                />
            </Modal>
        );
    }
}

const styles = StyleSheet.create({});
