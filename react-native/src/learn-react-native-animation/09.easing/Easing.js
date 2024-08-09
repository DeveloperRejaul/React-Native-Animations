import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Easing1() {
  const animation = useRef(new Animated.Value(0)).current;

  const StartAnimation = () => {
    Animated.timing(animation, {
      toValue: -200,
      duration: 1500,
      //   easing: Easing.back(5),
      //   easing: Easing.bezier(0, 1, 0, 2),
      //   easing: Easing.bounce,
      //   easing: Easing.circle,
      //   easing: Easing.cubic,
      //   easing: Easing.ease,
      //   easing: Easing.elastic(2),
      //   easing: Easing.exp,
      //   easing: Easing.linear,
      //   easing: Easing.poly(20),
      //   easing: Easing.quad,
      //   easing: Easing.sin,
      //   easing: Easing.step0,
      //   easing: Easing.step1,
      useNativeDriver: true,
    }).start(() => setTimeout(() => animation.setValue(0), 2000));
  };
  const animatonStyle = {
    transform: [{translateY: animation}],
  };

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, animatonStyle]} />
      <Text onPress={StartAnimation}>Press Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
