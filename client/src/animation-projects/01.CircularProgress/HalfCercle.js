import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RADIUS} from './constant.js';

export default function HalfCercle({color}) {
  return (
    <>
      {/* Haf cercle */}
      <View style={[styles.halfCercleBody]}>
        <View style={[styles.halfCercle, {backgroundColor: color}]}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  halfCercle: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS,
  },
  halfCercleBody: {
    width: RADIUS * 2,
    height: RADIUS,
    overflow: 'hidden',
  },
});
