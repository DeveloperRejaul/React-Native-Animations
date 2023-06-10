import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

export default function PenResponder() {
  // simple use cash
  //stap 01 cteate state

  // count how match click
  const [clickNumber, setClickNumber] = useState(0);
  const [longClick, setLongClick] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const animationopacity = useRef(new Animated.Value(1)).current;

  var clickStartTime, clickEndTime;

  const penResponder = useRef(
    PanResponder.create({
      // return Bolean data
      onStartShouldSetPanResponder: () => true,
      onShouldBlockNativeResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onMoveShouldSetPanResponder: () => true,

      // not bolean

      // its call when guster moveing
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderGrant: () => {
        // This mathod call cick start time

        // counting how match click
        setClickNumber(pre => pre + 1);
      },
      onPanResponderRelease: () => {
        // This mathod call cick end time
        clickEndTime = Date.now();
        const totalLogPress = clickEndTime - clickStartTime;
        setLongClick(totalLogPress);
        pan.extractOffset();
      },
      onPanResponderStart: (event, gusterState) => {
        // its call getter when start
        // console.log('hello');
        animationopacity.setValue(0.5);
      },
      onPanResponderEnd: () => {
        // its call getter when end
        // console.log('hello');
        animationopacity.setValue(1);
      },

      onPanResponderReject: () => {
        // console.log('hello');
      },

      onPanResponderTerminate: () => {
        // console.log('hello');
      },
    }),
  ).current;

  // console.log(pan);

  return (
    <View style={styles.containner}>
      <Text>Speed {speed}</Text>

      <Text> How long time :{longClick} ms</Text>
      <Text> How many time :{clickNumber}</Text>
      <Animated.View
        style={[
          styles.box,
          {transform: [{translateX: pan.x}, {translateY: pan.y}]},

          {opacity: animationopacity},
        ]}
        {...penResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containner: {justifyContent: 'center', alignItems: 'center', flex: 1},
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
