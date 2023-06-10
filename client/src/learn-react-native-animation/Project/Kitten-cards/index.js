import React, {useRef, useState} from 'react';
import {
  Animated,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {event} from 'react-native-reanimated';
import {offset, randomColor, width, _data} from './constence.js';
export default function index() {
  const [data, setData] = useState([..._data]);
  const aminatonColor = useRef(new Animated.Value(0));

  const container = useRef(null);

  const removeItem = () => {
    let newData = [...data];
    newData.shift();
    newData = [...newData, randomColor()];
    LayoutAnimation.easeInEaseOut();
    setData([...newData]);
  };

  // set background color color
  var count = 0;
  const setAction = color => {
    count++;
    if (count == 1) {
      container.current?.setNativeProps({backgroundColor: color});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View ref={container} style={[StyleSheet.absoluteFill]}>
        <View style={styles.container}>
          {data.map((item, index) => (
            <Card
              key={item}
              item={item}
              i={index}
              data={data}
              removeItem={removeItem}
              setAction={setAction}
            />
          ))}
        </View>
      </Animated.View>
    </View>
  );
}

function Card({item, i, data, removeItem, setAction}) {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const rotate = pan.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ['-50deg', '0deg', '50deg'],
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
      listener: (event, {dx, vx}) => {
        if (Math.sign(dx) && dx > offset) setAction('#00ff0066');
        if (Math.sign(dx) && dx < offset) setAction('#6e850c');
      },
    }),
    onPanResponderRelease: (event, {vx, dx}) => {
      if (Math.abs(vx) > 1 || Math.abs(dx) > offset) {
        Animated.spring(pan, {
          toValue: {x: width * 2 * (dx < 0 ? -1 : 1), y: 0},
          bounciness: 0,
          useNativeDriver: true,
        }).start(() => removeItem());
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      }
    },
    onPanResponderTerminate: () => {
      Animated.spring(this.pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: true,
      }).start();
    },
  });

  const animationStyle = {
    transform: [{translateX: pan.x}, {rotate}],
  };
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        styles.center,
        {zIndex: data.length - i},
      ]}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.item,
          animationStyle,
          {
            backgroundColor: item,
            width: 80 - i * 1 + '%',
            marginTop: i * 10,
          },
        ]}>
        <Text style={styles.text}>Swipe left or right!</Text>
        <Text style={styles.items}>{item}</Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {color: '#fff', fontSize: 25},
  items: {color: '#fff', fontSize: 18},
  center: {justifyContent: 'center', alignItems: 'center'},
  item: {
    height: '50%',
    borderWidth: 1,
    borderColor: '#00000055',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
