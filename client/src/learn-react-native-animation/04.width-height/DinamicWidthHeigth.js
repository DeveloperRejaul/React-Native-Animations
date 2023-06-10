import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function DinamicWidthHeigth() {
  const [animation, setanimation] = useState(new Animated.Value(100));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 1500,
    }).start();
  };

  const animationStyle = {height: animation};

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
    width: 100,
    backgroundColor: 'red',
  },
});
