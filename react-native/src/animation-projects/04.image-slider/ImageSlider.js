import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';

const {width, height} = Dimensions.get('window');
const cardWidth = width - 20;
const cardMargin = (width - cardWidth) / 2;

export default function ImageSlider() {
  const animate = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.contaier}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: animate}}}],
          {useNativeDriver: false},
        )}>
        {[0, 1, 2, 3, 4, 5].map(ele => (
          <View key={ele} style={styles.card} />
        ))}
      </ScrollView>

      <View style={styles.indicator}>
        {[0, 1, 2, 3, 4, 5].map((ele, i) => {
          const transolateX = animate.interpolate({
            inputRange: [-width + i * width, width * i, width + i * width],
            outputRange: [-20, 0, 20],
          });

          return (
            <View style={styles.dot}>
              <Animated.View
                style={[
                  styles.animatedDot,
                  {transform: [{translateX: transolateX}]},
                ]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaier: {marginVertical: height / 30},
  card: {
    width: cardWidth,
    height: height / 4,
    backgroundColor: 'red',
    marginHorizontal: cardMargin,
    borderRadius: 5,
  },

  indicator: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  animatedDot: {
    height: 10,
    width: 10,
    backgroundColor: 'green',
    position: 'absolute',
  },
});
