import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

export class AddScreen extends Component {
    private getSelectedImages = () => {
        console.log('get');
    };

    public render() {
        return (
            <View style={styles.root}>
                <CameraRollPicker
                    groupTypes="All"
                    maximum={10}
                    assetType="All"
                    callback={this.getSelectedImages}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%'
    }
});
