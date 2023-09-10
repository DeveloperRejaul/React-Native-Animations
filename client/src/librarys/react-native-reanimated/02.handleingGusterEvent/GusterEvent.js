import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

export default function GusterEvent() {
  const shareVal = useSharedValue(false);

  const gesterEvant = useAnimatedGestureHandler({
    onActive: () => {
      console.log('active');
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: shareVal.value ? '#FEEF86' : '#001972',
      transform: [{scale: shareVal.value ? 1.2 : 1}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gesterEvant}>
      <Animated.View style={[styles.ball, uas]} />
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  ball: {height: 50, width: 50},
});
