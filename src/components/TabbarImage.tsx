import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

interface IProps {
    icon: string;
    fill: boolean;
}

export class TabbarImage extends Component<IProps> {
    private getSource = () => {
        if (this.props.fill === true) {
            switch (this.props.icon) {
                case 'add':
                    return require('../../assets/png/add-fill.png');
                case 'favor':
                    return require('../../assets/png/favor-fill.png');
                case 'home':
                    return require('../../assets/png/home-fill.png');
                case 'search':
                    return require('../../assets/png/search-fill.png');
                case 'user':
                    return require('../../assets/png/user-fill.png');
            }
        } else {
            switch (this.props.icon) {
                case 'add':
                    return require('../../assets/png/add-outline.png');
                case 'favor':
                    return require('../../assets/png/favor-outline.png');
                case 'home':
                    return require('../../assets/png/home-outline.png');
                case 'search':
                    return require('../../assets/png/search-outline.png');
                case 'user':
                    return require('../../assets/png/user-outline.png');
            }
        }
    };

    public render() {
        return <Image style={styles.icon} source={this.getSource()} />;
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 36,
        height: 36
    }
});
