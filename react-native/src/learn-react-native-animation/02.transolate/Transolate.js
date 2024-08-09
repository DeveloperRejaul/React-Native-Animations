import {Text, View, Animated} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../constense/globalStyles.js';

const Transolate = () => {
  const [animation, setanimation] = useState(new Animated.Value(0));
  const animationStyle = {transform: [{translateY: animation}]};

  const handleTransolate = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, animationStyle]} />
      <Text onPress={handleTransolate}>Transolate</Text>
    </View>
  );
};

export default Transolate;
