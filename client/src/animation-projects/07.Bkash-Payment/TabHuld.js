import {PanResponder, Text, View, Animated, Alert} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles.js';
import HaufCercale from './HaufCercale.js';

export default function TabHuld() {
  const animation = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderRelease: () => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '140deg'],
  });

  return (
    <View style={styles.buttomFingerItem}>
      <View style={styles.tabButtonBody}>
        <View style={[styles.tabButton]} {...panResponder.panHandlers}>
          <Text style={styles.text}>Bkash Icon</Text>
          <Text style={styles.text}>Tab and huld to mobile recharge</Text>
        </View>
      </View>

      <Animated.View
        style={[styles.hafCercale, {transform: [{rotate: rotate}]}]}>
        <HaufCercale />
      </Animated.View>
    </View>
  );
}
