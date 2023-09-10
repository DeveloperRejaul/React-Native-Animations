import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationstring from '../constense/navigationstring.js';
import Animated_Scale from '../native-animation-api/Animated_scale/Animated_Scale.js';
import Animatedvalue from '../native-animation-api/Animated.value/Animated.value.js';
import Animation01 from '../native-animation-api/Animation.Timaing/Animate.Timaing.js';
import Animationtrsolate from '../native-animation-api/Animation.translate/Animation.trsolate.js';
import FadeInFadeOut from '../native-animation-api/FadeIn_FadeOut_Animation/FadeInFadeOut.js';
import PadeIn_PadeOut from '../native-animation-api/Padein_PadeOut/PadeIn_PadeOut.js';
import PadeIn_PadeOut2 from '../native-animation-api/Padein_PadeOut-LayoutAnimation/PadeIn_PadeOut_LayoutAnimation.js';
import PenResponder from '../native-animation-api/Pan_Responder/PenResponder.js';
import PanResponderReset from '../native-animation-api/panRespnderReset/PanResponderReset.js';
import Rotate_animation from '../native-animation-api/Rotate-animation/Rotate_animation.js';
import LayotAnimation from '../native-animation-api/translate-layoutAnimation/LayotAnimation.js';
import Transolate from '../native-animation-api/transolate-animation/Transolate.js';
import UseNativeDriver from '../native-animation-api/UseNativeDriver/UseNativeDriver.js';
import Weve_hand from '../native-animation-api/weve-hand/Weve_hand.js';
import UseNativeApi from '../Home/UseNativeApi.js';
import Librarys from '../Home/Librarys.js';
import Animatable from '../librarys/react-native-animatable/Animatable.js';
import Interactable from '../librarys/react-native-interactable/Interactable.js';
import Reanimated from '../librarys/react-native-reanimated/Reanimated.js';
import GesturHandler from '../librarys/react-native-gesture-handler/GesturHandler.js';
import PanhandlerContinuos from '../native-animation-api/PanhandlerContinuos/PanhandlerContinuos.js';
import Speedometer from '../native-animation-api/Speedometer/Speedometer.js';
import PanHandelerDecay from '../native-animation-api/panHandelerDecay/PanHandelerDecay.js';
import CirculerAnimation from '../native-animation-api/circulerAnimation/CirculerAnimation.js';
import ScrollAnimatedHeader from '../native-animation-api/scrollAnimatedHeader/ScrollAnimatedHeader.js';
import FlatlistAnimatedHeader from '../native-animation-api/flatlistAnimatedHeader/FlatlistAnimatedHeader.js';
import Swiper1 from '../native-animation-api/swiper1/Swiper1.js';
import Swiper3 from '../native-animation-api/swiper3/Swiper3.js';
import Swiper4 from '../native-animation-api/swiper4/Swiper4.js';
import Swiper5 from '../native-animation-api/swiper5/Swiper5.js';
import TitleScrolling from '../native-animation-api/titleScrolling/TitleScrolling.js';
import AnimatedScrrolling1 from '../native-animation-api/animatedScrrolling1/AnimatedScrrolling1.js';
import AnimatedTextInput from '../native-animation-api/animatedTextInput/AnimatedTextInput.js';
import CustomSwitch from '../native-animation-api/customSwitch/CustomSwitch.js';
import PagerButton from '../native-animation-api/pagerButton/PagerButton.js';
import SwiperWithPagerButton from '../native-animation-api/swiperWithPagerButton/SwiperWithPagerButton.js';
import AnimatedItemPopup1 from '../native-animation-api/animatedItemPopup1/AnimatedItemPopup1.js';
import AnimatedItemPopup2 from '../native-animation-api/animatedItemPopup2/AnimatedItemPopup2.js';
import CustomScrollView from '../native-animation-api/customScrollView/CustomScrollView.js';
import CustomScrollView2 from '../native-animation-api/customScrollView2/CustomScrollView2.js';
import WhatappHeader from '../native-animation-api/whatappHeader/WhatappHeader.js';
import HeaderSearchBar from '../native-animation-api/headerSearchBar/HeaderSearchBar.js';
import AnimationProject from '../Home/AnimationProject.js';
import CerculerProgess1 from '../animation-projects/01.CircularProgress/CerculerProgess1.js';
import ShareValue from '../librarys/react-native-reanimated/01.shareValue/ShareValue.js';
import GusterEvent from '../librarys/react-native-reanimated/02.handleingGusterEvent/GusterEvent.js';
import Swiper2 from '../native-animation-api/swiper2/Swiper2.js';
import Slider from '../animation-projects/03.card-slider/Slider.js';
import ImageSlider from '../animation-projects/04.image-slider/ImageSlider.js';
import LearnAnimation from '../Home/LearnAnimation.js';
import Opacity from '../learn-react-native-animation/01.opacity/Opacity.js';
import LearnTransolate from '../learn-react-native-animation/02.transolate/Transolate.js';
import Scale from '../learn-react-native-animation/03.Scale/Scale.js';
import DinamicWidthHeigth from '../learn-react-native-animation/04.width-height/DinamicWidthHeigth.js';
import Absolute_Position from '../learn-react-native-animation/05.Absolute Position/Absolute_Position.js';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationstring.LearnAnimation}>
        <Stack.Screen
          name={navigationstring.LearnAnimation}
          component={LearnAnimation}
        />
        <Stack.Screen
          name={navigationstring.UseNativeApi}
          component={UseNativeApi}
        />
        <Stack.Screen name={navigationstring.librarys} component={Librarys} />
        <Stack.Screen
          name={navigationstring.AnimationProject}
          component={AnimationProject}
        />
        <Stack.Screen
          name={navigationstring.CerculerProgess1}
          component={CerculerProgess1}
        />
        <Stack.Screen name={navigationstring.Opacity} component={Opacity} />
        <Stack.Screen
          name={navigationstring.LearnTransolate}
          component={LearnTransolate}
        />
        <Stack.Screen
          name={navigationstring.DinamicWidthHeigth}
          component={DinamicWidthHeigth}
        />
        <Stack.Screen name={navigationstring.Scale} component={Scale} />
        <Stack.Screen
          name={navigationstring.Absolute_Position}
          component={Absolute_Position}
        />
        <Stack.Screen
          name={navigationstring.Speedometer}
          component={Speedometer}
        />
        <Stack.Screen
          name={navigationstring.ShareValue}
          component={ShareValue}
        />
        <Stack.Screen
          name={navigationstring.PanhandlerContinuos}
          component={PanhandlerContinuos}
        />
        <Stack.Screen
          name={navigationstring.panHandelerDecay}
          component={PanHandelerDecay}
        />
        <Stack.Screen
          name={navigationstring.ImageSlider}
          component={ImageSlider}
        />
        <Stack.Screen
          name={navigationstring.GesturHandler}
          component={GesturHandler}
        />
        <Stack.Screen
          name={navigationstring.circulerAnimation}
          component={CirculerAnimation}
        />
        <Stack.Screen
          name={navigationstring.Animatable}
          component={Animatable}
        />
        <Stack.Screen
          name={navigationstring.Intractable}
          component={Interactable}
        />
        <Stack.Screen
          name={navigationstring.Reanimated}
          component={Reanimated}
        />
        <Stack.Screen
          name={navigationstring.GusterEvent}
          component={GusterEvent}
        />
        <Stack.Screen
          name={navigationstring.scrollAnimatedHeader}
          component={ScrollAnimatedHeader}
        />
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
        <Stack.Screen name={navigationstring.swiper1} component={Swiper1} />
        <Stack.Screen name={navigationstring.swiper2} component={Swiper2} />
        <Stack.Screen name={navigationstring.swiper3} component={Swiper3} />
        <Stack.Screen name={navigationstring.swiper4} component={Swiper4} />
        <Stack.Screen name={navigationstring.swiper5} component={Swiper5} />
        <Stack.Screen name={navigationstring.slider} component={Slider} />
        <Stack.Screen
          name={navigationstring.titleScrolling}
          component={TitleScrolling}
        />
        <Stack.Screen
          name={navigationstring.animatedScrrolling1}
          component={AnimatedScrrolling1}
        />
        <Stack.Screen
          name={navigationstring.flatlistAnimatedHeader}
          component={FlatlistAnimatedHeader}
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
          name={navigationstring.animatedTextInput}
          component={AnimatedTextInput}
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
          name={navigationstring.customSwitch}
          component={CustomSwitch}
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
          name={navigationstring.pagerButton}
          component={PagerButton}
        />
        <Stack.Screen
          name={navigationstring.Transolate}
          component={Transolate}
        />
        <Stack.Screen
          name={navigationstring.UseNativeDriver}
          component={UseNativeDriver}
        />
        <Stack.Screen
          name={navigationstring.SwiperWithPagerButton}
          component={SwiperWithPagerButton}
        />
        <Stack.Screen
          name={navigationstring.whatappHeader}
          component={WhatappHeader}
        />
        <Stack.Screen
          name={navigationstring.headerSearchBar}
          component={HeaderSearchBar}
        />
        <Stack.Screen
          name={navigationstring.animatedItemPopup1}
          component={AnimatedItemPopup1}
        />
        <Stack.Screen
          name={navigationstring.animatedItemPopup2}
          component={AnimatedItemPopup2}
        />
        <Stack.Screen
          name={navigationstring.customScrollView}
          component={CustomScrollView}
        />
        <Stack.Screen
          name={navigationstring.customScrollView2}
          component={CustomScrollView2}
        />
        <Stack.Screen name={navigationstring.Weve_hand} component={Weve_hand} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
