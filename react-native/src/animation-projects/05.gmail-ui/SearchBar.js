import {View, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.js';
import Profile from './Profile.js';

export default function SearchBar() {
  return (
    <View style={styles.searchBarBody}>
      <Pressable>
        <View style={styles.lineIcon} />
        <View style={styles.lineIcon} />
        <View style={styles.lineIcon} />
      </Pressable>
      <TextInput
        placeholder="Search in emails"
        placeholderTextColor={'#929493'}
        style={styles.searchInput}
      />
      <Profile />
    </View>
  );
}
