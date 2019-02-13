import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PostImage } from './PostImage';

export class Post extends Component {
    public render() {
        return (
            <View style={styles.root}>
                <View style={styles.top}>
                    <Image
                        style={styles.profile}
                        borderRadius={15}
                        source={require('../../assets/images/profile.png')}
                    />
                    <Text style={styles.name}>kyung_wook_</Text>
                    <TouchableOpacity>
                        <Image
                            style={styles.menu}
                            source={require('../../assets/icons/post/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
                <PostImage />

                <View style={styles.bottom}>
                    <TouchableOpacity>
                        <Image
                            style={[styles.bottomIcon, styles.favorIcon]}
                            source={require('../../assets/icons/post/favor-outline.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.bottomIcon}
                            source={require('../../assets/icons/post/comment.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.bottomSpace} />
                    <TouchableOpacity>
                        <Image
                            style={styles.bottomIcon}
                            source={require('../../assets/icons/post/collection-outline.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.content}>kyung_wook_ 본문입니다.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        display: 'flex'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        width: 30,
        height: 30,
        margin: 12
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    menu: {
        width: 24,
        height: 24,
        margin: 12
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    bottomIcon: {
        width: 36,
        height: 36
    },
    bottomSpace: {
        flex: 1
    },
    favorIcon: {
        marginRight: 8
    },
    content: {
        marginLeft: 14
    }
});
