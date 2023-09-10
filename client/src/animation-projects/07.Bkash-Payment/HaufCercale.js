import {View} from 'react-native';
import React from 'react';
import styles from './styles.js';

export default function HaufCercale() {
  return (
    <View style={styles.animatedProgress}>
      <View style={styles.animatedProgressDivider} />
    </View>
  );
}
