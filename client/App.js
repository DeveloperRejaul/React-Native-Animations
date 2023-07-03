import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import DragAndDrop from './src/animation-projects/11_Drag_and_drop/DragAndDrop';
import {OsmiProvider} from 'osmicsx';
import AnimatedTyping from './src/animation-projects/12_auto_typing_animation/Typing';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <OsmiProvider>
        <AnimatedTyping />
      </OsmiProvider>
    </GestureHandlerRootView>
  );
}
