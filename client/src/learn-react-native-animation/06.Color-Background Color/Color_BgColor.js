import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';

export default function Color_BgColor() {
  const animation = useRef(new Animated.Value(0)).current;

  const animationStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const bgColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255,99,71, 1)', 'rgba(255,99,71, 0)'],
  });

  const boxColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor: bgColor}]}>
      <Animated.View style={[styles.box, {backgroundColor: boxColor}]} />
      <Text onPress={animationStart}>Change Color</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
});
