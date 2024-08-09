import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const gap = (width - itemWidth) / 4;
const data = [1, 2, 3, 4, 5];
export default function TitleScrolling() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={styles.scrollView}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth + gap}>
      {data.map(x => (
        <View key={x} style={styles.item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: gap * 2,
    paddingRight: gap,
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'red',
    width: itemWidth,
    height: itemWidth,
    marginRight: gap,
    borderRadius: 10,
  },
});
