import {
  View,
  ScrollView,
  StatusBar,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import styles from './styles.js';
import SearchBar from './SearchBar.js';
import _data from './data.js';
import Item from './Item.js';

export default function GmailUI() {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const [data, setdata] = useState([..._data]);

  const removeItem = useCallback(index => {
    let myData = [...data];
    myData.splice(index, 1);
    LayoutAnimation.easeInEaseOut();
    setdata([...myData]);
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#181818'} barStyle={'light-content'} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SearchBar />
        {data.map((ele, index) => (
          <Item key={ele.id} ele={ele} index={index} removeItem={removeItem} />
        ))}
      </ScrollView>
    </View>
  );
}
