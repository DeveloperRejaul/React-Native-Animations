import {StyleSheet, Dimensions, ScrollView, Animated} from 'react-native';
import React, {useRef} from 'react';

const {width, height} = Dimensions.get('window');

const cardWidth = (width / 3) * 2;

export default function AnimatedScrrolling1() {
  const animation = useRef(new Animated.Value(1)).current;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: animation}}}],
        {useNativeDriver: false},
      )}>
      {[1, 2, 3, 4, 5].map((e, i) => {
        const scale = animation.interpolate({
          inputRange: [
            -cardWidth + i * cardWidth,
            cardWidth * i,
            cardWidth + i * cardWidth,
          ],
          outputRange: [1, 1.1, 1],
        });

        return (
          <Animated.View
            style={[styles.card, {transform: [{scale: scale}]}]}
            key={i}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'red',
    width: cardWidth,
    height: height / 4,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
