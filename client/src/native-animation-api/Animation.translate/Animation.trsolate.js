import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';

export default function Animationtrsolate() {
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: 'red',
              borderRadius: 100,
              transform: [
                {
                  translateX: leftValue,
                },
              ],
            },
          ]}></Animated.View>
      </View>

      <TouchableOpacity onPress={moveBall}>
        <Text style={styles.text}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
