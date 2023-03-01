import {Animated, StyleSheet, Text, View, PanResponder} from 'react-native';
import React, {useRef} from 'react';
import useStyle from '../componentes/styles/gStyle.js';

const PanResponderReset = () => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.timing(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          duration: 1000,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.timing(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          duration: 1000,
        }).start();
      },
    }),
  ).current;

  const {center} = useStyle();
  return (
    <View style={[center, styles.container]}>
      <View style={styles.line1} />
      <View style={styles.line2} />
      <Animated.View
        style={[styles.box1, {transform: [{translateX: pan.x}]}]}
      />
      <Animated.View
        style={[styles.box2, {transform: [{translateY: pan.y}]}]}
      />
      <Animated.View
        style={[styles.box, {transform: pan.getTranslateTransform()}]}
        {...panResponder.panHandlers}>
        <Text style={styles.tex}>MOVE</Text>
      </Animated.View>
    </View>
  );
};

export default PanResponderReset;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#44006e',
  },
  line1: {
    height: 1,
    width: '100%',
    backgroundColor: '#44006e',
    position: 'absolute',
  },
  line2: {
    height: '100%',
    width: 1,
    backgroundColor: '#44006e',
    position: 'absolute',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#44006e',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tex: {
    color: '#fff',
  },
  box1: {
    height: 10,
    width: 10,
    backgroundColor: '#44006e',
    position: 'absolute',
  },
  box2: {
    height: 10,
    width: 10,
    backgroundColor: '#44006e',
    position: 'absolute',
  },
});
