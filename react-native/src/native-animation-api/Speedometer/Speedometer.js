import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function Speedometer() {
  const speed = useRef(new Animated.Value(0)).current;

  const handlemeter = () => {};

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderStart: (e, s) => {
        handlemeter('Start');
      },
      onPanResponderRelease: (e, s) => {
        handlemeter('Stop');
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.speedPasser, {transform: [{translateY: speed}]}]}
      />

      <Animated.View {...panResponder.panHandlers}>
        <Text>Touch Me</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  speedPasser: {backgroundColor: 'red', height: 50, width: 50},
});
