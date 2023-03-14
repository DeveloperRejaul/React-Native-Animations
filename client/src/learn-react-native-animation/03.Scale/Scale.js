import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Scale() {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const animationStyle = {transform: [{scaleY: animation}]};

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -2,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(1);
    });
  };

  return (
    <View style={globalStyles.container}>
      <Pressable onPress={startAnimation}>
        <Animated.View style={[globalStyles.box, animationStyle]}>
          <Text>Hello</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
