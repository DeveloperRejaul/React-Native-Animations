import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  PanResponder,
} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '../../constense/globalStyles.js';

export default function AnimatedFunction() {
  // Animated Function List
  /**
   * Timing   => its using for timing animation
   * Spring   => its work look like Spring
   * Loop     => itd useing for looping infinity
   * Event    =>its a utility method to automatically set a value on an Animated.Value given an array/keys to traverse. Typically this would be used with the onScroll or onPanResponderMove.
   * Decay    => The Animated.decay call is primarily used for dragging and gesture animations. All it requires is you to provide a velocity in an x and y direction as well as a friction to slow it down.The primary use case is for gesture animations after a user has released their finger.
   * Add      => this mathod useing for 2 or multiful animation
   * Divide   =>  its using for animation value dividing
   * Multiply => its using for animation value multifly
   * Modulo   => its using for animation value % Modulo
   */

  const animation = useRef(new Animated.Value(0)).current;

  const StartAnimation = () => {
    //=========================== Timing animation=========================
    Animated.timing(animation, {
      toValue: 100,
      useNativeDriver: true,
      // Timaing configaration
      duration: 1500,
      delay: 100,
    });

    //=========================== Spring animation=========================
    Animated.spring(animation, {
      toValue: 100,
      useNativeDriver: true,
      // Spring configaration
      // bounciness: 20,
      // damping: 1, // this is real spring fanctanality
      // friction: 1,
      // mass: 1,
      // overshootClamping: false,
      // restDisplacementThreshold: 20,
      // restSpeedThreshold: 1,
      // speed: 100,
      // stiffness: 10,
      // tension: 10000,
    });
    // .start(() => setTimeout(() => animation.setValue(0), 2000));

    //=========================== Loop animation=========================
    // Animated.loop(
    //   Animated.spring(animation, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }),
    // );

    //=========================== event animation=========================
    // its bacikaly using  for scrolling animation => onScroll or onPanResponderMove

    // onScroll using examle
    // Animated.event([
    //   {
    //     nativeEvent: {
    //       contentOffset: {
    //         y: animation,
    //       },
    //     },
    //   },
    // ]);

    // PanResponder using example
    // Animated.event([
    //   null,
    //   {
    //     dx: animation.x,
    //     dy: animation.y,
    //   },
    // ]);
  };

  //=========================== Decay animation=========================
  // its using for scroll animation , its tracking the gester animation speed
  const Pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  // let _x = 0;
  // let _y = 0;

  // Pan.addListener(value => {
  //   _x = value.x;
  //   _y = value.y;
  // });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: Pan.x,
            dy: Pan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (event, value) => {
        // Using hare animation Decay
        Animated.decay(Pan, {
          velocity: {x: value.vx, y: value.vy},
          deceleration: 0.9997,
          useNativeDriver: true,
        }).start();

        Pan.extractOffset();
      },
      onPanResponderGrant: () => {
        // Plaing in offset and value
        // Pan.setOffset({x: _x, y: _y});
        // Pan.setValue({x: 0, y: 0});
      },
    }),
  ).current;
  const animationStyle = {transform: Pan.getTranslateTransform()};

  //=========================== Animated Math Mathod  (Add,divide, multyply , modulo)=============================
  const animationAdd1 = useRef(new Animated.Value(20)).current;
  const animationAdd2 = useRef(new Animated.Value(2)).current;
  const randomValue = 20;

  // const newAnimated = Animated.add(animationAdd1, animationAdd2); // retutn 50
  // const newAnimated = Animated.divide(animationAdd1, animationAdd2); // return 1.5
  // const newAnimated = Animated.multiply(animationAdd1, animationAdd2); // return 600
  // const newAnimated = Animated.modulo(animationAdd1, animationAdd2); // return

  // console.log(newAnimated);
  // const addanuimationStyle = {transform: [{translateY: newAnimated}]};

  return (
    <View style={globalStyles.container}>
      <Animated.View style={[globalStyles.box, addanuimationStyle]} />
      <TouchableOpacity>
        <Text onPress={'startAnimation'}> Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
