import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function DinamicWidthHeigth() {
  const [animation, setanimation] = useState(new Animated.Value(100));
  const animationStyle = {
    // curently height,width not sauport in native animated module

    height: animation,
    width: animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={globalStyles.container}>
      <Pressable onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyle]}>
          <Text>Et consectetur occaecat incididunt</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // height: 100,
    // width: 100,
    backgroundColor: 'red',
  },
});
