import {View, Text, PanResponder, Animated} from 'react-native';
import React, {useRef} from 'react';
import {
  offset,
  randomColor,
  width,
  posativeZiroOffset,
  nagativeZiroOffset,
} from './constence.js';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

export default function Item({ele, removeItem, index}) {
  const transolateX = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const scaleIconRight = useRef(new Animated.Value(1)).current;
  const scaleIconLeft = useRef(new Animated.Value(1)).current;
  const transolateIconLeft = useRef(new Animated.Value(0)).current;
  const transolateIconRight = useRef(new Animated.Value(0)).current;
  const iconOpacity = useRef(new Animated.Value(1)).current;

  const newColor = randomColor();

  let callCounter = 0;
  let nagatiove = false;
  let posative = false;

  const startAnimation = () => {
    if (nagatiove & (callCounter === -1)) {
      Animated.parallel([
        Animated.timing(scaleIconRight, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(transolateIconRight, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (posative & (callCounter === 1)) {
      Animated.parallel([
        Animated.timing(scaleIconLeft, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(transolateIconLeft, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, {dx: transolateX.x, dy: transolateX.y}],
      {
        useNativeDriver: false,
        listener: (event, {dx}) => {
          if (
            ((dx > 0) & (dx < posativeZiroOffset)) |
            ((dx < 0) & (dx > nagativeZiroOffset))
          ) {
            callCounter = 0;
            posative = false;
            nagatiove = false;
            scaleIconRight.setValue(1);
            scaleIconLeft.setValue(1);
            transolateIconLeft.setValue(0);
            transolateIconRight.setValue(0);
          } else if (dx > posativeZiroOffset) {
            posative = true;
            callCounter++;
            startAnimation();
          } else if (dx < nagativeZiroOffset) {
            nagatiove = true;
            --callCounter;
            startAnimation();
          }
        },
      },
    ),
    onPanResponderRelease: (event, {dx}) => {
      if (Math.abs(dx) > offset) {
        Animated.spring(transolateX, {
          toValue: {x: width * 2 * (dx < 0 ? -1 : 1), y: 0},
          bounciness: 0,
          useNativeDriver: true,
        }).start(() => removeItem(index));
      } else {
        Animated.spring(transolateX, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      }
      if (Math.abs(dx) > offset) {
        Animated.timing(iconOpacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      callCounter = 0;
      posative = false;
      nagatiove = false;
      scaleIconRight.setValue(1);
      scaleIconLeft.setValue(1);
      transolateIconLeft.setValue(0);
      transolateIconRight.setValue(0);
    },
  });

  const scaleIconStyleRight = scaleIconRight.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.5, 1],
  });
  const scaleIconStyleLeft = scaleIconLeft.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.5, 1],
  });
  const transolateLeftIcon = transolateIconLeft.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -30, 0],
  });
  const transolateRightIcon = transolateIconRight.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -30, 0],
  });

  return (
    <View style={{backgroundColor: newColor, marginVertical: 5}}>
      <Animated.View style={[styles.iconBody, {opacity: iconOpacity}]}>
        <View style={styles.iconBodyInner}>
          <Animated.View
            style={[
              styles.errowIcon,
              {transform: [{translateY: transolateLeftIcon}]},
            ]}>
            <Icon name="arrow-down" size={15} color="#000" />
          </Animated.View>
          <Animated.View style={[{transform: [{scale: scaleIconStyleLeft}]}]}>
            <Icon name="card-outline" size={30} color="#000" />
          </Animated.View>
        </View>

        <View style={styles.iconBodyInner}>
          <Animated.View
            style={[
              styles.errowIcon,
              {transform: [{translateY: transolateRightIcon}]},
            ]}>
            <Icon name="arrow-down" size={20} color="#000" />
          </Animated.View>
          <Animated.View style={[{transform: [{scale: scaleIconStyleRight}]}]}>
            <Icon name="card-outline" size={30} color="#000" />
          </Animated.View>
        </View>
      </Animated.View>

      <Animated.View
        {...panResponder.panHandlers}
        key={ele.id}
        style={[styles.itemBody, {transform: [{translateX: transolateX.x}]}]}>
        <View style={[styles.profileBody]}>
          <Text style={[styles.profileText, {backgroundColor: newColor}]}>
            {ele.profile}
          </Text>
        </View>
        <View style={styles.contentBody}>
          <View style={styles.row}>
            <Text style={styles.title}>{ele.title}</Text>
            <Text style={styles.date}>{ele.date}</Text>
          </View>

          <Text numberOfLines={1} style={styles.subTitle}>
            {ele.subtitle}
          </Text>

          <View style={styles.row}>
            <Text style={styles.text} numberOfLines={1}>
              {ele.text}
            </Text>
            <Text style={styles.icon}>Icon</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
