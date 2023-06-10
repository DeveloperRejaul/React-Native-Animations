import React, {Component} from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const activeColor = 'red';
const inactiveColor = 'lightgrey';
const dotWidth = 20;

export default class SLider extends Component {
  state = {
    sliderWidth: null,
  };
  progress = 0.25;
  pan = new Animated.ValueXY({x: 0, y: 0});
  scaleY = new Animated.Value(1);
  translateX = new Animated.Value(0);
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({x: this.pan.x._value, y: this.pan.y._value});
      this.pan.setValue({x: 0, y: 0});
      this.animateScale(true);
    },
    onPanResponderMove: Animated.event(
      [null, {dx: this.pan.x, dy: this.pan.y}],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
      this.animateScale();
    },
    onPanResponderTerminate: this.animateScale,
  });
  setListener() {
    const {sliderWidth} = this.state;
    this.translateX.removeAllListeners();
    this.translateX.addListener(x => {
      const progress = (x.value / (sliderWidth - dotWidth)).toFixed(2);
      this.onSeek(progress);
      this.progress = progress;
    });
  }
  onSeek = progress => {
    this.textRef.setNativeProps({text: progress.toString()});
    // do your thing
  };
  animateScale = expand => {
    Animated.spring(this.scaleY, {
      toValue: expand ? 2 : 1,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  componentDidUpdate(_, prevState) {
    const {sliderWidth} = this.state;
    if (sliderWidth != prevState.sliderWidth) {
      this.pan.setValue({x: (sliderWidth - dotWidth) * this.progress, y: 0});
    }
  }
  render() {
    const {sliderWidth} = this.state;
    this.translateX = Animated.diffClamp(this.pan.x, 0, sliderWidth - dotWidth);
    this.setListener();
    return (
      <View style={styles.container}>
        <TextInput
          ref={e => (this.textRef = e)}
          defaultValue={this.progress.toString()}
          style={styles.txt}
          editable={false}
        />
        <View
          style={styles.barContainer}
          {...this.panResponder.panHandlers}
          onLayout={e => {
            this.setState({sliderWidth: e.nativeEvent.layout.width});
          }}>
          {!!sliderWidth && (
            <Animated.View
              style={[styles.bar, {transform: [{scaleY: this.scaleY}]}]}>
              <Animated.View
                style={[
                  styles.activeLine,
                  {transform: [{translateX: this.translateX}]},
                ]}
              />
            </Animated.View>
          )}
          {!!sliderWidth && (
            <Animated.View
              style={[styles.dot, {transform: [{translateX: this.translateX}]}]}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 50,
  },
  txt: {
    fontSize: 25,
    color: '#000',
  },
  barContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  bar: {
    height: 3,
    width: '100%',
    backgroundColor: inactiveColor,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  dot: {
    height: dotWidth,
    width: dotWidth,
    borderRadius: dotWidth / 2,
    backgroundColor: activeColor,
    position: 'absolute',
  },
  activeLine: {
    height: '100%',
    width: '100%',
    backgroundColor: activeColor,
    marginLeft: '-100%',
  },
});
