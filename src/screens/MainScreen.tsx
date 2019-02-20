import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    AddScreen,
    FavorScreen,
    HomeScreen,
    SearchScreen,
    Tabbar,
    UserScreen
} from '../components';

import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';

@inject(STORE_NAME)
@observer
export default class MainScreen extends Component<IStoreInjectedProps> {
    private getScreen = () => {
        const tabName = this.props[STORE_NAME].tabStore.getTabName();
        switch (tabName) {
            case 'home':
                return <HomeScreen />;
            case 'search':
                return <SearchScreen />;
            case 'favor':
                return <FavorScreen />;
            case 'user':
                return <UserScreen />;
        }
    };
    public render() {
        return (
            <View style={styles.root}>
                {this.getScreen()}
                <View style={styles.tabbar}>
                    <Tabbar />
                </View>
                <AddScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: '100%'
    },
    tabbar: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});
