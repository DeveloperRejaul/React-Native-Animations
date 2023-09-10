import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Opacity() {
  const [animation, setanimation] = useState(new Animated.Value(1));

  const handleOpacity = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(finish => {
      // animation ses hule ay block ta call huy
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const animationStyle = {
    opacity: animation,
  };

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[styles.box, animationStyle]} />
      <Text onPress={handleOpacity}>Click</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {height: 200, width: 200, backgroundColor: 'red'},
});
