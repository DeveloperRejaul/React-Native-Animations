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

export default function Swiper4() {
  const scrollValue = useRef(new Animated.Value(0)).current;

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
        {DATA.map((x, i) => (
          <Indicator x={x} key={x} i={i} scrollValue={scrollValue} />
        ))}
      </View>
    </View>
  );
}

function Indicator({i, scrollValue}) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + i * width, i * width, width + i * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <View style={styles.indicator}>
      <Animated.View
        style={[
          styles.activeIndicator,
          {position: 'absolute', transform: [{translateX}]},
        ]}
      />
    </View>
  );
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
    overflow: 'hidden',
  },
  activeIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
