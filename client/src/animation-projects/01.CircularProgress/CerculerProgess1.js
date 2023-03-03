import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import HalfCercle from './HalfCercle.js';

export default function CerculerProgess1() {
  const roated = useRef(new Animated.Value(0)).current;

  const _roated1 = roated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });
  const _roated2 = roated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleRoate = () => {
    Animated.timing(roated, {
      toValue: 1,
      useNativeDriver: true,
      duration: 2000,
    }).start();
  };
  const handleRoateback = () => {
    Animated.timing(roated, {
      toValue: 0,
      useNativeDriver: true,
      duration: 2000,
    }).start();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Animated.View style={{transform: [{rotate: _roated2}]}}>
          <HalfCercle color={'green'} />
        </Animated.View>

        <Animated.View style={{transform: [{rotate: _roated1}]}}>
          <HalfCercle color={'green'} />
        </Animated.View>
      </View>

      <Text onPress={() => handleRoate()}> start </Text>
      <Text onPress={() => handleRoateback()}> Back </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
