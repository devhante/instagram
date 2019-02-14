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

                <View style={styles.bottomButtons}>
                    <TouchableOpacity>
                        <Image
                            style={[styles.bottomButton, styles.favorButton]}
                            source={require('../../assets/icons/post/favor-outline.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.bottomButton}
                            source={require('../../assets/icons/post/comment.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.bottomButtonSpace} />
                    <TouchableOpacity>
                        <Image
                            style={styles.bottomButton}
                            source={require('../../assets/icons/post/collection-outline.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.content}>
                        <Text style={styles.contentId}>kyung_wook_ </Text>
                        <Text>본문입니다.</Text>
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.commentButton}>
                            댓글 2개 모두 보기
                        </Text>
                    </TouchableOpacity>
                </View>
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
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    bottomButton: {
        width: 36,
        height: 36
    },
    bottomButtonSpace: {
        flex: 1
    },
    favorButton: {
        marginRight: 8
    },
    bottom: {
        marginLeft: 12,
        marginBottom: 16
    },
    content: {
        marginBottom: 8
    },
    contentId: {
        fontWeight: 'bold'
    },
    commentButton: {
        color: '#999999'
    }
});
