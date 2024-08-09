import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import React, {useState, useRef} from 'react';

export default function Animated_Scale() {
  const [count, setCount] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  // Incrace 1 when onPress
  const onPress = () => {
    setCount(pre => pre + 1);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      <Text>{count}</Text>
      <Animated.View style={[{transform: [{scale}]}]}>
        <Pressable
          style={styles.btn}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          <Text style={styles.text}>Counter + 1</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 100,
    width: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
});
