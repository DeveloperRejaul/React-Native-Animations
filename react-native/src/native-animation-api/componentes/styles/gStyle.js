import {StyleSheet} from 'react-native';
import React from 'react';

export default function useStyle() {
  const styles = StyleSheet.create({
    center: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return styles;
}
