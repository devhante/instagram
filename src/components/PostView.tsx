import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Post } from './Post';

export class PostView extends Component {
    public render() {
        return (
            <ScrollView>
                <Post />
                <Post />
                <View style={{ marginBottom: 120 }} />
            </ScrollView>
        );
    }
}
