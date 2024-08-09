import {useRef} from 'react';
import {Animated, StyleSheet, Easing} from 'react-native';
import {Text} from 'react-native-animatable';

export default function animations() {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  const transolateStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });
  const boxStyle = transolateStyle.interpolate({
    inputRange: [0, 300],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
  });

  const trStyle = {
    backgroundColor: boxStyle,
    transform: [{translateY: transolateStyle}],
  };

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[styles.box, trStyle]} />
      <Text onPress={startAnimation}>Click Me</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
});
