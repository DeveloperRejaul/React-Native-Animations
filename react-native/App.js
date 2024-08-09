import {StatusBar} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ShareElement from './src/animation-projects/06.shareElement';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ShareElement/>
    </GestureHandlerRootView>
  );
}
