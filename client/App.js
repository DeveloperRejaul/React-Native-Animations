import {StatusBar} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ScrollableCardSwipe from './src/animation-projects/08.scrollableCardSwiping-animation/Index';
import ScrollHeaderAnimation from './src/animation-projects/09.ScrollHeaderAnimation/ScrollHeaderAnimation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollHeaderAnimation />
    </GestureHandlerRootView>
  );
}
