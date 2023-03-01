import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';

// How is the Animation actually played on the Screen

// 1. Composition = js thread ; Animation by native os
// 1.a Compute
// 1.b Serialize
// 1.c Transfer it over the bridge to host OS
// 1.d Deserialize
// 1.e run the animation / frame

// 2. Everything by native OS
// 2.a Before your anumatin start -> Serialize the whole animation thing
// 2.b Native os Would deserialize it
// 2.c WIN
// 2.c a No more over the bridge transfers
// 2.c b JS thred is now free for other stuff
// 2.c c Smoother animations

export default function UseNativeDriver() {
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      for (let i = 0; i < 50000000000; i++) {}
    }, 1000);
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
              opacity: leftValue,
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
