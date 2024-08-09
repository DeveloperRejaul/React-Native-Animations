import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import globalStyles from '../../../constense/globalStyles.js';
import {dotHeight, progressWidth} from './constent.js';

export default function AnimatedSlider() {
  const dotMove = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const scale = useRef(new Animated.Value(1)).current;
  const numberText = useRef(null);
  // const [textNum, settextNum] = useState('00');

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: dotMove.x}], {
        useNativeDriver: false,
        listener: () => {
          setAction();
        },
      }),
      onPanResponderGrant: () => {
        onScale(true);
      },
      onPanResponderRelease: () => {
        dotMove.extractOffset();
        onScale(false);
      },
    }),
  ).current;
  const transolateX = dotMove.x.interpolate({
    inputRange: [0, progressWidth],
    outputRange: [0, progressWidth],
    extrapolate: 'clamp',
  });

  const onScale = value => {
    Animated.spring(scale, {
      toValue: value ? 2 : 1,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  const setAction = () => {
    numberText.current?.setNativeProps({backgroundColor: 'red'});
  };

  const barActiveStyle = {transform: [{translateX: transolateX}]};
  const barScaleY = {transform: [{scaleY: scale}]};
  const dotScale = {transform: [{translateX: transolateX}, {scale}]};

  return (
    <View style={globalStyles.container}>
      <Text ref={numberText}>{'00'}</Text>
      <View style={styles.bar} {...pan.panHandlers}>
        <Animated.View style={[styles.progress, barScaleY]}>
          <Animated.View style={[styles.activeProgessColor, barActiveStyle]} />
        </Animated.View>
        <Animated.View style={[styles.dot, dotScale]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: dotHeight / 4,
  },
  progress: {
    width: progressWidth,
    height: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  dot: {
    height: dotHeight,
    width: dotHeight,
    backgroundColor: 'red',
    borderRadius: dotHeight / 2,
    position: 'absolute',
    top: -dotHeight / 4,
  },
  activeProgessColor: {
    height: '100%',
    backgroundColor: 'red',
    width: '100%',
    position: 'absolute',
    right: '100%',
  },
});
