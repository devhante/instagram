import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomeNavbar from '../components/HomeNavbar';

export default class HomeScreen extends Component {
    public render() {
        return (
            <View>
                <HomeNavbar />
            </View>
        );
    }
}
