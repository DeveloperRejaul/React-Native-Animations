import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';

export default function Animation01() {
  const leftValue = useState(new Animated.Value(0))[0];

  /***
   * timing and spring is same
   *timing set duration
   *spring don't set duration
   ****/

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  //   function moveBall() {
  //     Animated.spring(leftValue, {
  //       toValue: 1000,
  //       useNativeDriver: false,
  //     }).start();
  //   }

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
              marginLeft: leftValue,
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
