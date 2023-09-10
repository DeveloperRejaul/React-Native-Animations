import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';

export default function PanhandlerContinuos() {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        pan.setOffset({x: pan.x._value, y: pan.y._value});
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        pan.flattenOffset();
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
    <View style={styles.container}>
      <View style={styles.line01}></View>
      <View style={styles.line02}></View>
      <TouchableOpacity style={styles.btn} onPress={handleReset}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.box01,
          {transform: [{translateX: pan.x}]},
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.box02,
          {transform: [{translateY: pan.y}]},
        ]}></Animated.View>

      <Animated.View
        style={[styles.MoveBox, {transform: pan.getTranslateTransform()}]}
        {...panResponder.panHandlers}>
        <Text style={styles.text}>Move</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  line01: {
    height: 1,
    backgroundColor: 'green',
    width: '100%',
    position: 'absolute',
  },
  line02: {
    height: '100%',
    backgroundColor: 'green',
    width: 1,
    position: 'absolute',
  },
  MoveBox: {
    height: 70,
    width: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
  },
  box01: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    position: 'absolute',
  },
  box02: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    position: 'absolute',
  },
  text: {color: '#000', textAlign: 'center'},
  btn: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  btnText: {color: '#000', fontSize: 18},
});
