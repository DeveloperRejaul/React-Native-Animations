import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
const headerHeight = 100;

export default function ScrollHeaderAnimation() {
  const arr = new Array(50).fill('hello');
  const scrollY = useRef(new Animated.Value(0)).current;
  const diff = Animated.diffClamp(scrollY, 0, headerHeight / 2);
  const headerTranslate = diff.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1],
  });

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslate}]}]}>
        <Text>Hello</Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {arr.map((data, i) => (
          <View key={i} style={styles.items}>
            <Text>{data}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    height: headerHeight,
    width: '100%',
    backgroundColor: '#075E54',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 4,
  },
  items: {
    height: 40,
    width: '100%',
    backgroundColor: '#6dc3ce',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
