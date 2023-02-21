import {View, Text} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

export default function Animatedvalue() {
  // Animated.Value(5);
  //   Animated.ValueXY(5);

  // need a value 0 1 2 3 4 5 6 7 8
  // (0,0) -> (100, 100)
  // (0,0) -> (1,1) ->(2,2) -> (3,3)....
  // 1 secend
  // 60 frames per secont

  // This value Should transfrom into other value

  return (
    <View>
      <Text>Animated.value</Text>
    </View>
  );
}
