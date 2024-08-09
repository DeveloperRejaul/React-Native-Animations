import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Rotation() {
  const animation = useRef(new Animated.Value(0)).current;

  const animationStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const rotateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotateY = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '0deg', '180deg'],
  });
  const animationStyle = {transform: [{rotateX: rotateX}, {rotateY: rotateY}]};

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, animationStyle]} />
      <Text onPress={animationStart}>Rotation</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
