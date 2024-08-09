import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
const {width} = Dimensions.get('window');
const DATA = ['brown', 'orange', 'red', 'blue', 'green'];

export default function Swiper2() {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  const inputRange = [0];
  const scaleOutputRange = [1];
  DATA.forEach(
    (_, i) =>
      i != 0 && inputRange.push(...[(width * (2 * i - 1)) / 2, width * i]),
  );
  DATA.forEach((_, i) => i != 0 && scaleOutputRange.push(...[3, 1]));
  const scaleX = scrollValue.interpolate({
    inputRange,
    outputRange: scaleOutputRange,
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false},
        )}>
        {DATA.map(x => (
          <View style={[styles.card, {backgroundColor: x}]} key={x} />
        ))}
      </ScrollView>
      <View pointerEvents="none" style={styles.indictorContainer}>
        {DATA.map(x => (
          <Indicator x={x} key={x} />
        ))}

        <Animated.View
          style={[
            styles.activeIndicator,
            {position: 'absolute', transform: [{translateX}, {scaleX}]},
          ]}
        />
      </View>
    </View>
  );
}

function Indicator() {
  return <View style={styles.indicator} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 3,
  },

  card: {
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indictorContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: 5,
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
});
