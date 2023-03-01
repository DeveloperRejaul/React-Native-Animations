import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';

const {width, height} = Dimensions.get('window');
const boxWidth = 100;

export default function Transolate() {
  const translateX = useRef(new Animated.Value(0)).current;
  const [onRight, setOnRight] = useState(false);

  const animation = () => {
    Animated.timing(translateX, {
      toValue: onRight ? 0 : width - boxWidth,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setOnRight(!onRight);
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        // source={require('../../assist/image/00001.jpg')}
        style={[styles.Box, {transform: [{translateX}]}]}
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
