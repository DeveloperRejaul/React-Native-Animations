import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import globalStyles from '../../../constense/globalStyles.js';
const {width, height} = Dimensions.get('window');
const zoneHeight = height / 10;

export default function DiractionTrecker() {
  const [message, setMessage] = useState('Still Touchable');

  const getDitection = gestureState => {
    const gragUP = gestureState.dy < 0;
    const gragDound = gestureState.dy > 0;
    const gragLeft = gestureState.dx < 0;
    const gragright = gestureState.dx > 0;
    const redZone = gestureState.moveY < zoneHeight;
    const greenZone = gestureState.moveY > height - zoneHeight;

    let message = '';

    if (gragLeft || gragright) {
      if (gragLeft) message += ' Gragge Left';
      if (gragright) message += ' Gragge Right';
    }

    if (gragUP || gragDound) {
      if (gragUP) message += ' Gragge Up';
      if (gragDound) message += ' Gragge Down';
    }

    if (redZone || greenZone) {
      if (redZone) message += ' Red Zone';
      if (greenZone) message += ' Green Zone';
    }
    if (message) return message;
  };

  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) =>
        !!getDitection(gestureState),
      onPanResponderMove: (event, gestureState) => {
        const message = getDitection(gestureState);
        setMessage(message);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    }),
  ).current;

  return (
    <Animated.View {...pan.panHandlers} style={globalStyles.container}>
      <View style={styles.redZone} />
      <Text>{message}</Text>
      <View style={styles.greenZone} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  redZone: {
    backgroundColor: 'red',
    width: width,
    height: zoneHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  greenZone: {
    backgroundColor: 'green',
    width: width,
    height: zoneHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
