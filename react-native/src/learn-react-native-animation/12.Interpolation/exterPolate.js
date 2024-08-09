import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function ExterPolate() {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      //   toValue: 0,
      toValue: 3,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        // toValue: 3,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };

  const animationInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 1.2],
    extrapolate: 'identity',
    extrapolateLeft: 'clamp',
    // extrapolateRight: 'clamp',
  });
  const animationStyle = {transform: [{scale: animationInterpolate}]};

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, animationStyle]}></Animated.View>
      <Text onPress={startAnimation}>Click Me </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
