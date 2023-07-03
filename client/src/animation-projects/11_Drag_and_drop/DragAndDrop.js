import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStyles} from 'osmicsx';
import LinearGradient from 'react-native-linear-gradient';
import AutoTypingText from 'react-native-auto-typing-text';

export default function DragAndDrop() {
  const {apply} = useStyles();

  return (
    <View style={apply('flex justify-center items-center bg-green-100')}>
      <AutoTypingText
        text={'lorem10lorem10lorem10lorem10orem10lorem10lorem10'}
        charMovingTime={100}
        delay={100}
      />
      <LinearGradient
        style={apply('justify-center items-center h/20 w/100 shadow-lg ')}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9f4c4c', '#14141494']}>
        <Text style={apply('text-white text-6xl uppercase')}>DragAndDrop</Text>
      </LinearGradient>
    </View>
  );
}
