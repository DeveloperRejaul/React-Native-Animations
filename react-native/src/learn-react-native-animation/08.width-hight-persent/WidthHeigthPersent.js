import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

const WidthHeigthPersent = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const _animation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });
  const animationStyle = {
    width: _animation,
    height: _animation,
  };

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[styles.box, animationStyle]}>
        <Text>Hello</Text>
      </Animated.View>
      <Text onPress={startAnimation}>WidthHeigthPersent</Text>
    </View>
  );
};

export default WidthHeigthPersent;

const styles = StyleSheet.create({
  box: {
    // height: '15%',
    // width: '30%',
    backgroundColor: 'red',
  },
});
