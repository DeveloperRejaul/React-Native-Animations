import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function ShareValue() {
  // create value => useSharedValue(0);
  //Connecting with View's props => useAnimatedStyle or useAnimatedProps
  // Updating values => shareVal.value = updated value
  // Reading values => shareVal.value
  // Running animations =>
  // Stopping animations => cancelAnimation
  // Interpolating => interpolate

  // Simple example
  // stape 01
  const shareVal = useSharedValue(0);

  // stape 02
  // Connecting with View's props
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // white out animation
        // { translateX: shareVal.value }

        //==========================================================
        // withSpring animation
        // {
        //   translateX: withSpring(
        //     shareVal.value,
        //     {
        //       velocity: 10,
        //       damping: 20,
        //       stiffness: 90,
        //     },
        //     finished => {
        //       if (finished) {
        //         console.log('finished');
        //       } else {
        //         console.log('ANIMATION GOT CANCELLED');
        //       }
        //     },
        //   ),
        // },

        //==========================================================
        // withTiming(toValue) animation
        // {
        //   translateX: withTiming(shareVal.value, {
        //     duration: 1000,
        //   }),
        // },

        //==========================================================
        // animation modifiar withReeat
        // {translateX: withRepeat(withTiming(shareVal.value), 6, true)},

        //==========================================================
        // withSequence,
        {
          translateX: withSequence(
            withTiming(-shareVal.value, {duration: 100}),
            withRepeat(withTiming(shareVal.value, {duration: 100}), 6, true),
            withTiming(0, {duration: 50}),
          ),
        },
      ],
    };
  });

  // Animation modifiar
  // withRepeat
  // rotation.value = withRepeat(withTiming(10), 6, true);

  // withSequence,
  // rotation.value = withSequence(
  //   withTiming(-10, {duration: 50}),
  //   withRepeat(withTiming(ANGLE, {duration: 100}), 6, true),
  //   withTiming(0, {duration: 50}),
  // );

  // Stape 03
  // Updating values
  const updateValue = () => {
    // whit out animation
    shareVal.value = Math.random() * 255;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Text onPress={updateValue}>Move</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {height: 50, width: 50, backgroundColor: 'red'},
});
