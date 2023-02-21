import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';
import React, {useState} from 'react';

export default function PenResponder() {
  const pen = useState(new Animated.ValueXY())[0];

  const penResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pen.setOffset({
          x: pan.x._value,
        });
      },
    }),
  );

  return (
    <View>
      <Text>PenResponder</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
