import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';

export default function CirculerAnimation() {
  const animated = useRef(new Animated.Value(0)).current;
  const rotate = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotateOpposit = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  const transform = [{rotate: rotate}];
  const transform1 = [{rotate: rotateOpposit}];

  const animation = () => {
    animated.setValue(0);
    Animated.timing(animated, {
      useNativeDriver: true,
      toValue: 1,
      duration: 2000,
      // speed: 1,
      // bounciness: 10,
    }).start();
  };

  return (
    <View style={styles.constiner}>
      <Animated.View style={[styles.item, {transform}]}>
        <Animated.View
          style={[styles.dot, {transform: transform1}]}></Animated.View>
      </Animated.View>
      <Text onPress={animation}>Click</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  item: {
    position: 'absolute',
    width: 50,
    height: 300,
    backgroundColor: 'green',
  },
  dot: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'darkred',
  },
});
