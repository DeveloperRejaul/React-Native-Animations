import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ImagePhat from './ImagePhat.js';
import styles from './styles.js';

export default function Profile() {
  return (
    <View style={styles.imageBody}>
      <Image style={styles.image} source={ImagePhat.profile} />
    </View>
  );
}
