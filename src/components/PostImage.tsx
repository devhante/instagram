import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet
} from 'react-native';

const win = Dimensions.get('window');

export class PostImage extends Component {
    private scrollView: ScrollView;
    private beginOffset = 0;
    private currentOffset = 0;
    private timer = false;
    private length = 3;
    private index = 0;

    private handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        this.currentOffset = event.nativeEvent.contentOffset.x;
    };

    private handleScrollBegin = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        this.beginOffset = this.currentOffset;
        this.timer = true;
        setTimeout(() => {
            this.timer = false;
        }, 100);
    };

    private handleScrollEnd = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        if (this.timer) {
            if (
                this.currentOffset - this.beginOffset > 0 &&
                this.index < this.length - 1
            ) {
                this.index++;
            } else if (
                this.currentOffset - this.beginOffset < 0 &&
                this.index > 0
            ) {
                this.index--;
            }
        } else {
            this.index = Math.round(this.currentOffset / win.width);
        }
        this.scrollView.scrollTo({
            x: this.index * win.width,
            y: 0,
            animated: true
        });
    };
    public render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={this.handleScroll}
                onScrollBeginDrag={this.handleScrollBegin}
                onScrollEndDrag={this.handleScrollEnd}
                scrollEventThrottle={1}
                ref={ref => (this.scrollView = ref)}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/images/picture1.png')}
                />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/picture1.png')}
                />
                <Image
                    style={styles.image}
                    source={require('../../assets/images/picture1.png')}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: win.width,
        height: win.width
    }
});
