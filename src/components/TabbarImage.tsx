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
                    return require('../../assets/icons/tabbar/add-fill.png');
                case 'favor':
                    return require('../../assets/icons/tabbar/favor-fill.png');
                case 'home':
                    return require('../../assets/icons/tabbar/home-fill.png');
                case 'search':
                    return require('../../assets/icons/tabbar/search-fill.png');
                case 'user':
                    return require('../../assets/icons/tabbar/user-fill.png');
            }
        } else {
            switch (this.props.icon) {
                case 'add':
                    return require('../../assets/icons/tabbar/add-outline.png');
                case 'favor':
                    return require('../../assets/icons/tabbar/favor-outline.png');
                case 'home':
                    return require('../../assets/icons/tabbar/home-outline.png');
                case 'search':
                    return require('../../assets/icons/tabbar/search-outline.png');
                case 'user':
                    return require('../../assets/icons/tabbar/user-outline.png');
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
