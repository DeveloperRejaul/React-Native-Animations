import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles.js';
import TabHuld from './TabHuld.js';

export default function BkashPaymentAnimation() {
  return (
    <View style={styles.container}>
      <Text style={styles.damiText}>Your all of content</Text>
      <TabHuld />
    </View>
  );
}
