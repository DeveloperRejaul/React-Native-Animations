import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Absolute_Position() {
  const animation = useRef(new Animated.Value(0)).current;

  const _animation = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 100, 0],
  });

  const animationStyle = {
    left: _animation,
    top: _animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
    }).start();
  };

  return (
    <View style={[globalStyles.container]}>
      <Animated.View style={[styles.box, animationStyle]} />
      <Text onPress={startAnimation}>Press Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    // right: 0,
    // bottom: 0,
  },
});
