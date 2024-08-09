import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';

const headerHight = 300;
const headerFinalHeight = 70;
const imageSize = (headerHight / 3) * 2;
const {width} = Dimensions.get('window');

export default function ScrollAnimatedHeader() {
  const image = require('../../assets/image/rejaul-03.jpg');

  const [textWith, setTextWith] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const offset = headerHight - headerFinalHeight;

  const transitedHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });
  const transitedImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -(headerFinalHeight - headerHight) / 2],
    extrapolate: 'clamp',
  });
  const transitedImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(width / 2) + (imageSize * headerFinalHeight) / headerHight,
    ],
    extrapolate: 'clamp',
  });
  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHight],
    extrapolate: 'clamp',
  });
  const transiteName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -width / 2 + textWith / 2 + headerFinalHeight],
    extrapolate: 'clamp',
  });
  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => (
          <View style={styles.item} key={x} />
        ))}
      </ScrollView>

      <Animated.View
        pointerEvents={'none'}
        style={[styles.header, {transform: [{translateY: transitedHeader}]}]}>
        <Animated.View
          style={[
            styles.image,
            {
              transform: [
                {translateY: transitedImageY},
                {translateX: transitedImageX},
                {scale: scaleImage},
              ],
            },
          ]}>
          <Image source={image} style={styles.img} resizeMode={'cover'} />
        </Animated.View>
        <Animated.Text
          onTextLayout={e => setTextWith(e.nativeEvent.lines[0].width)}
          style={[
            styles.name,
            {
              transform: [{translateX: transiteName}, {scale: scaleName}],
            },
          ]}>
          Rezaul
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollContainer: {paddingTop: headerHight + 5},
  item: {
    height: 100,
    marginBottom: 50,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  header: {
    height: headerHight,
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: headerHight,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: 30,
    color: '#000',
    position: 'absolute',
    bottom: 0,
    height: headerFinalHeight,
    textAlignVertical: 'center',
    letterSpacing: 2,
  },
});
