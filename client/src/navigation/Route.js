import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home.js';
import navigationstring from '../constense/navigationstring.js';
import Animated_Scale from '../screens/Animated_scale/Animated_Scale.js';
import Animatedvalue from '../screens/Animated.value/Animated.value.js';
import Animation01 from '../screens/Animation.Timaing/Animate.Timaing.js';
import Animationtrsolate from '../screens/Animation.translate/Animation.trsolate.js';
import FadeInFadeOut from '../screens/FadeIn_FadeOut_Animation/FadeInFadeOut.js';
import PadeIn_PadeOut from '../screens/Padein_PadeOut/PadeIn_PadeOut.js';
import PadeIn_PadeOut2 from '../screens/Padein_PadeOut-LayoutAnimation/PadeIn_PadeOut_LayoutAnimation.js';
import PenResponder from '../screens/Pan_Responder/PenResponder.js';
import PanResponderReset from '../screens/panRespnderReset/PanResponderReset.js';
import Rotate_animation from '../screens/Rotate-animation/Rotate_animation.js';
import LayotAnimation from '../screens/translate-layoutAnimation/LayotAnimation.js';
import Transolate from '../screens/transolate-animation/Transolate.js';
import UseNativeDriver from '../screens/UseNativeDriver/UseNativeDriver.js';
import Weve_hand from '../screens/weve-hand/Weve_hand.js';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={navigationstring.Home} component={Home} />
        <Stack.Screen
          name={navigationstring.Animation_Scale}
          component={Animated_Scale}
        />
        <Stack.Screen
          name={navigationstring.Animation_value}
          component={Animatedvalue}
        />
        <Stack.Screen
          name={navigationstring.Animation_Timaing}
          component={Animation01}
        />
        <Stack.Screen
          name={navigationstring.Animation_Trsolate}
          component={Animationtrsolate}
        />
        <Stack.Screen
          name={navigationstring.Animation_FadeInFadeOut}
          component={FadeInFadeOut}
        />
        <Stack.Screen
          name={navigationstring.PadeIn_PadeOut}
          component={PadeIn_PadeOut}
        />
        <Stack.Screen
          name={navigationstring.PadeIn_PadeOut2}
          component={PadeIn_PadeOut2}
        />
        <Stack.Screen
          name={navigationstring.penResponder}
          component={PenResponder}
        />
        <Stack.Screen
          name={navigationstring.PanResponderReset}
          component={PanResponderReset}
        />
        <Stack.Screen
          name={navigationstring.Rotate_animation}
          component={Rotate_animation}
        />
        <Stack.Screen
          name={navigationstring.LayotAnimation}
          component={LayotAnimation}
        />
        <Stack.Screen
          name={navigationstring.Transolate}
          component={Transolate}
        />
        <Stack.Screen
          name={navigationstring.UseNativeDriver}
          component={UseNativeDriver}
        />
        <Stack.Screen name={navigationstring.Weve_hand} component={Weve_hand} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
