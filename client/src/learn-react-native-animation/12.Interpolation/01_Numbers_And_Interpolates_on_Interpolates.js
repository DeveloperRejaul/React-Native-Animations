import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function Numbers_And_Interpolates_on_Interpolates() {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };
  // Animation interpolate
  const interpolateValue = animation.interpolate({
    inputRange: [0, 1, 2], // it is allwase incrising , ey kane sob somoy soto te boro value dite hube
    outputRange: [0, 300, 0], // Out has been anything , like (number, deg , color-code, etc) // ey kane inputRange e tik jotota value dibo , tik totota value eykane dite hube, ey value r maddome bule dibo ki dorone out dibo
  });

  // interpolate ke chaining o kura jay =>example here
  const interpolatedInterpolate = interpolateValue.interpolate({
    inputRange: [0, 300], // ey kane inputRange hube interpolateValue er outpot onosare
    outputRange: [1, 0.5],
    //   explene =========
    //   eykane => interpolateValue er outPut er value jukon 0 , tokon opacity = 1 hucce,
    //   abar interpolateValue er outPut er value jukon 300 ,tokon opacity = .5 hucce,
    //  abar interpolateValue er outPut er value jukon 0 ,tokon opacity = 1 hucce,
  });

  const interpolatedInterpolateInterpolate =
    interpolatedInterpolate.interpolate({
      inputRange: [0.5, 0.7, 1],
      outputRange: [100, 200, 0],
    });

  const animatedStyle = {
    transform: [
      {translateY: interpolateValue},
      {translateX: interpolatedInterpolateInterpolate},
    ],
    opacity: interpolatedInterpolate,
  };

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, animatedStyle]}></Animated.View>
      <Text onPress={startAnimation}>Interpolates</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
