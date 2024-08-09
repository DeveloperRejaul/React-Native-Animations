import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Combaining_animation() {
  // all combining animation mathod(Parallel,Sequence,Stagger,Delay)
  /**
   * Paralel => eti bebo har huy onek golo animaton aksate run kurar junno
   * Sequence => eti bebo har huy onek golo animaton ektar por ekta run kurar junno
   * Stagger => eti bebo har huy onek golo animaton jukon ektar por ekta run huy , tokon tokon ektart por ekta ekta nirdisto somoy por por run kurar jnno bebo har huy
   * Delay => eti bebo har huy onek golo animaton run kurte huy , tokon ektar teke ekta nirdisto somoy por por run kurear junno ,
   */

  const animation1 = useRef(new Animated.Value(0)).current;
  const animation2 = useRef(new Animated.Value(1)).current;

  // Using example (Paralal)
  const startAnimationParalal = () => {
    Animated.parallel([
      Animated.timing(animation1, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animation2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const animationParalal1 = {transform: [{translateY: animation1}]};
  const animationParalal2 = {opacity: animation2};

  // Using example (Sequence)
  const startAnimationSequence = () => {
    Animated.sequence([
      Animated.timing(animation1, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animation2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const animationSequence1 = {transform: [{translateY: animation1}]};
  const animationSequence2 = {opacity: animation2};

  // Using example (Stagger)
  const startAnimationStagger = () => {
    Animated.stagger(5000, [
      Animated.timing(animation1, {
        toValue: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animation2, {
        //   exieute this 5 after secuend
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animationStagger1 = {transform: [{translateY: animation1}]};
  const animationStagger2 = {opacity: animation2};

  // Using example (Stagger)
  const startAnimationDelay = () => {
    Animated.sequence([
      Animated.timing(animation1, {
        toValue: 200,
        useNativeDriver: true,
      }),
      Animated.delay(5000), //after  5 secend  run animated2
      Animated.timing(animation2, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const animationDelay1 = {transform: [{translateY: animation1}]};
  const animationDelay2 = {opacity: animation2};

  return (
    <View style={globalStyles.container}>
      <Animated.View
        style={[globalStyles.box, animationDelay1, animationDelay2]}
      />
      <Text onPress={startAnimationDelay}>Combaining_animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
