import {StyleSheet, Text, View, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

export default function PanHandelerDecay() {
  let panValue = {x: 0, y: 0};

  const pan = useRef(new Animated.ValueXY(panValue)).current;

  pan.addListener(value => {
    panValue = value;
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderGrant: () => {
        pan.setOffset({x: panValue.x, y: panValue.y});
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderRelease: (e, g) => {
        pan.flattenOffset();
        Animated.decay(pan, {
          velocity: {x: g.vx, y: g.vy},
          deceleration: 0.99,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const handleReset = () => {
    Animated.timing(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };

  return (
    <View style={styles.contsiner}>
      <Animated.View
        style={[styles.box, {transform: pan.getTranslateTransform()}]}
        {...panResponder.panHandlers}></Animated.View>
      <Text onPress={handleReset}>Reset</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contsiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {backgroundColor: 'red', height: 70, width: 70},
});
