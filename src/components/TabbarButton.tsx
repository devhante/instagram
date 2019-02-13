import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IStoreInjectedProps, STORE_NAME } from '../stores/rootStore';
import { TabbarImage } from './TabbarImage';

interface IProps extends IStoreInjectedProps {
    name: string;
}

@inject(STORE_NAME)
@observer
export class TabbarButton extends Component<IProps> {
    private isTabName = (value: string) => {
        if (this.props[STORE_NAME].tabStore.getTabName() === value) {
            return true;
        } else {
            return false;
        }
    };

    private handlePress = () => {
        this.props[STORE_NAME].tabStore.setTabName(this.props.name);
    };

    public render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.handlePress}
                activeOpacity={1}
            >
                <TabbarImage
                    icon={this.props.name}
                    fill={this.isTabName(this.props.name)}
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
    }
});
