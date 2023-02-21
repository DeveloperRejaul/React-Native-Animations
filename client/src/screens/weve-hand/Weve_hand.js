import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useRef, useState} from 'react';
import useStyle from '../componentes/styles/gStyle.js';

export default function Weve_hand() {
  const animation = useRef(new Animated.Value(0)).current;
  const rotate = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 10],
    outputRange: [
      '0deg',
      '180deg',
      '-10deg',
      '150deg',
      '-5deg',
      '140deg',
      '0deg',
      '50deg',
    ],
  });

  const {center} = useStyle();
  const handelAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 10,
      useNativeDriver: true,
      easing: Easing.linear,
      duration: 2500,
    }).start();
  };
  return (
    <View style={center}>
      <Animated.Text style={[styles.wave, {transform: [{rotate}]}]}>
        👋
      </Animated.Text>
      <Text onPress={handelAnimation} style={styles.btn}>
        WAVE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    padding: 6,
    color: 'white',
    borderRadius: 5,
  },
  wave: {
    fontSize: 50,
    paddingBottom: 25,
    paddingRight: 25,
  },
});
