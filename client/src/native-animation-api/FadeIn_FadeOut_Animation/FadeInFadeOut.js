import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';

export default function FadeInFadeOut() {
  const opacity = useState(new Animated.Value(0))[0];

  function FadeIn() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  function FadeOut() {
    Animated.timing(opacity, {
      toValue: 0,
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
              opacity: opacity,
            },
          ]}></Animated.View>
      </View>
      <TouchableOpacity onPress={FadeOut}>
        <Text style={styles.text}>Fade In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={FadeIn}>
        <Text style={styles.text}>Fade Out</Text>
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
