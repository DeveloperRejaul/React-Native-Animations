import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

import React, {useState} from 'react';
const {width, height} = Dimensions.get('window');
const boxWidth = 100;

export default function LayotAnimation() {
  const [onRight, setOnRight] = useState(true);

  const animation = () => {
    LayoutAnimation.easeInEaseOut();
    setOnRight(!onRight);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.Box,
          {
            marginLeft: onRight ? 0 : width - boxWidth,
          },
        ]}
      />

      <Pressable style={styles.btn} onPress={animation}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          {onRight ? 'Move Left' : 'Move Right'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'space-evenly',
  },
  Box: {
    width: boxWidth,
    height: boxWidth,
    backgroundColor: 'red',
  },
  btn: {
    backgroundColor: 'green',
    width: width / 3,
    alignSelf: 'center',
    padding: 10,
  },
});
