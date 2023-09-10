import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';

const {width, height} = Dimensions.get('window');

export default function Rotate_animation() {
  const _rotate = useRef(new Animated.Value(0)).current;

  const rotate = _rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const animate = () => {
    _rotate.setValue(0);
    Animated.timing(_rotate, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  return (
    <View
      style={{
        height: height,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <Animated.View style={[styles.Box, {transform: [{rotate}]}]} />
      <Pressable onPress={animate}>
        <Text>Click To Rotate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
