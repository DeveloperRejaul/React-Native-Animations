import {StyleSheet, ScrollView, Dimensions, Animated, Text} from 'react-native';
import React, {useRef} from 'react';

const {width} = Dimensions.get('screen');
const cardWidth = (width / 3) * 2;
const gap = (width - cardWidth) / 7;
const offset = cardWidth;

export default function Slider() {
  const scrollX = useRef(new Animated.Value(1)).current;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <Item key={e} scrollX={scrollX} i={i} />
      ))}
    </ScrollView>
  );
}

const Item = ({i, scrollX}) => {
  const scale = scrollX.interpolate({
    inputRange: [-offset + i * offset, offset * i, offset + i * offset],
    outputRange: [0.9, 1.1, 0.9],
  });
  return (
    <Animated.View key={i} style={[styles.item, {transform: [{scale: scale}]}]}>
      <Text style={styles.text}>{'Card :' + i}</Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  item: {
    backgroundColor: 'red',
    width: cardWidth,
    height: cardWidth,
    marginHorizontal: gap,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 20, fontWeight: '600', color: '#fff'},
});
