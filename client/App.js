import {StatusBar} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardSlider from './src/animation-projects/02.card_slider/CardSlider';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <CardSlider />
    </GestureHandlerRootView>
  );
}
