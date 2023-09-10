import {
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import {withAnchorPoint} from 'react-native-anchor-point';

const {width, height} = Dimensions.get('window');
const cardWidth = 100;
const cardHeight = 100;

export default function ImplementTransfromOrigin() {
  const animation = useRef(new Animated.Value(0)).current;
  // if we get transform origin facilities , wi need to install this library "react-native-anchor-point"

  const handleAnimation = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      //   bounciness: 5,
      //   speed: 0,
      tension: 1,
      velocity: 10,
    }).start(() => {
      setTimeout(() => {
        animation.setValue(0);
      }, 2000);
    });
  };

  const styleValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // using "react-native-anchor-point"
  const getTransform = () => {
    let transform = {
      transform: [{perspective: 1000}, {rotateY: styleValue}],
    };
    return withAnchorPoint(
      transform,
      //   {x: 0, y: 0}, // left top
      //   {x: 1, y: 0}, // right top
      //   {x: 1, y: 1}, // right bottom
      //   {x: 0, y: 1}, // left bottom
      //   {x: 0.5, y: 0}, // top middle
      //   {x: 1, y: 0.5}, // right middle
      //   {x: 0.5, y: 1}, // bottom middle
      {x: 0, y: 0.5}, // bottom middle
      //   {x: 0.5, y: 0.5}, // all middle

      {width: cardWidth, height: cardHeight},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewInner}>
        <Pressable onPress={handleAnimation}>
          <Animated.View
            style={[styles.boxView, getTransform()]}></Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxView: {
    height: cardHeight,
    width: cardWidth,
    backgroundColor: 'red',
  },
  viewInner: {
    height: cardHeight,
    width: cardWidth,
    backgroundColor: 'yellow',
  },
});
